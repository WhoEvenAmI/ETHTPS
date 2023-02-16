﻿using ETHTPS.API.BIL.Infrastructure.Services.DataServices;
using ETHTPS.API.BIL.Infrastructure.Services.DataServices.GTPS;
using ETHTPS.API.Core.Integrations.MSSQL.Services.Data;
using ETHTPS.Data.Core.Models.Queries.Data.Requests;
using ETHTPS.Data.Core.Models.DataPoints;

using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;

namespace ETHTPS.API.Controllers.L2DataControllers
{
    [Route("API/GasAdjustedTPS/[action]")]
    public class GasAdjustedTPSController : IPSService
    {
        private readonly IGTPSService _gasAdjustedTPSService;

        public GasAdjustedTPSController(IGTPSService gasAdjustedTPSService)
        {
            _gasAdjustedTPSService = gasAdjustedTPSService;
        }

        [HttpGet]
        public IDictionary<string, IEnumerable<DataResponseModel>> GeMonthlyDataByYear([FromQuery] ProviderQueryModel model, int year)
        {
            return _gasAdjustedTPSService.GeMonthlyDataByYear(model, year);
        }
        [HttpGet]
        public IDictionary<string, IEnumerable<DataResponseModel>> Get([FromQuery] ProviderQueryModel model, string interval)
        {
            return _gasAdjustedTPSService.Get(model, interval);
        }
        [HttpGet]
        public IDictionary<string, IEnumerable<DataPoint>> Instant([FromQuery] ProviderQueryModel model)
        {
            return _gasAdjustedTPSService.Instant(model);
        }
        [HttpGet]
        public IDictionary<string, DataPoint> Max([FromQuery] ProviderQueryModel model)
        {
            return _gasAdjustedTPSService.Max(model);
        }
    }
}