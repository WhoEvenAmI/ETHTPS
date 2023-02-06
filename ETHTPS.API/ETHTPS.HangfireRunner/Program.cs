using ETHTPS.API.Core.Infrastructure.Services.Implementations;
using ETHTPS.API.DependencyInjection;
using ETHTPS.API.Security.Core.Authentication;
using ETHTPS.API.Security.Core.Policies;
using ETHTPS.Configuration.Extensions;
using static ETHTPS.HangfireRunner.Constants;

using NLog.Extensions.Hosting;
using ETHTPS.Configuration;
using ETHTPS.Services.InfluxWrapper;
using ETHTPS.HangfireRunner.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseNLog();
var services = builder.Services;
services.AddCoreServices();
services.AddDatabaseContext(CURRENT_APP_NAME);
services.AddScoped<TimeWarpService>();
services.AddCustomCORSPolicies();
services.AddAPIKeyAuthenticationAndAuthorization();
services.AddControllers().AddControllersAsServices();
services.AddSwagger();
services.AddScoped<IInfluxWrapper, InfluxWrapper>((s) => 
{ 
    using (var p = s.GetRequiredService<IDBConfigurationProvider>())
    {
        return new InfluxWrapper(new InfluxWrapperConfiguration()
        {
            Bucket = p.GetFirstConfigurationStringForCurrentEnvironment("InfluxDB_prod_bucket"),
            URL = p.GetFirstConfigurationStringForCurrentEnvironment("InfluxDB_prod_url"),
            Org = p.GetFirstConfigurationStringForCurrentEnvironment("InfluxDB_prod_org"),
            Token = p.GetFirstConfigurationStringForCurrentEnvironment("InfluxDB_token")
        });
    }
});
builder.Services.AddRazorPages();
var configurationQueues = new string[] { "default" };
#pragma warning disable ASP0000 // Do not call 'IServiceCollection.BuildServiceProvider' in 'ConfigureServices'
using (var built = services.BuildServiceProvider())
{
    var config = built.GetRequiredService<IDBConfigurationProvider>();
    configurationQueues = config.GetConfigurationStringsForMicroservice(CURRENT_APP_NAME).Where(x => x.Name == "Hangfire queue")?.Select(x => x.Value).ToArray();
}
#pragma warning restore ASP0000 // Do not call 'IServiceCollection.BuildServiceProvider' in 'ConfigureServices'
if (configurationQueues?.Length > 0)
{
    services.InitializeHangfire(CURRENT_APP_NAME);
    services.AddHangfireServer(CURRENT_APP_NAME);
    services.AddInfluxTPSDataUpdaters();
    //services.AddTPSDataUpdaters(builder.Configuration);
    //services.AddHistoricalBlockInfoDataUpdaters(configurationQueues);
    //services.AddTimeWarpUpdaters(configurationQueues)
   
    services.AddStatusNotifiers(configurationQueues);
}

services.RegisterMicroservice(CURRENT_APP_NAME, "Hangfire runner web app");
var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();
if (configurationQueues?.Length > 0)
{
    app.ConfigureHangfire(builder.Configuration);
}
app.UseRouting();
app.ConfigureSwagger();
app.UseAuthorization();
app.MapControllers();
app.MapRazorPages();

app.Run();