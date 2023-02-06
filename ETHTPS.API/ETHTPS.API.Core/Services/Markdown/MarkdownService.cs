﻿using ETHTPS.Data.Core.Extensions.StringExtensions;
using ETHTPS.Data.Database;

namespace ETHTPS.API.Core.Infrastructure.Services.Markdown
{
    public class MarkdownService : EFCoreCRUDServiceBase<MarkdownPage>, IMarkdownService
    {
        private readonly EthtpsContext _context;
        public MarkdownService(EthtpsContext context) : base(context.MarkdownPages, context)
        {
            _context = context;
        }

        public IEnumerable<MarkdownPage> GetMarkdownPagesFor(string providerName)
        {
            return _context.ProviderDetailsMarkdownPages?.ToList()?.Where(x => x.Provider.Name.LossyCompareTo(providerName)).Select(x => x.MarkdownPage);
        }
    }
}