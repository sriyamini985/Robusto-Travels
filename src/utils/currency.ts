const CURRENCY_CONVERSIONS: Record<string, { rate: number; symbol: string; prefix: boolean }> = {
  'switzerland': { rate: 0.88, symbol: 'CHF ', prefix: true },
  'japan': { rate: 155, symbol: '¥', prefix: true },
  'italy': { rate: 0.92, symbol: '€', prefix: true },
  'france': { rate: 0.92, symbol: '€', prefix: true },
  'dubai': { rate: 3.67, symbol: ' AED', prefix: false },
  'uae': { rate: 3.67, symbol: ' AED', prefix: false },
  'bali': { rate: 16000, symbol: 'Rp ', prefix: true },
  'indonesia': { rate: 16000, symbol: 'Rp ', prefix: true },
  'maldives': { rate: 15.4, symbol: ' MVR', prefix: false },
  'singapore': { rate: 1.34, symbol: 'S$', prefix: true },
  'thailand': { rate: 36, symbol: '฿', prefix: true },
  'australia': { rate: 1.50, symbol: 'A$', prefix: true },
  'usa': { rate: 1.00, symbol: '$', prefix: true },
  'united states': { rate: 1.00, symbol: '$', prefix: true },
  'turkey': { rate: 32, symbol: '₺', prefix: true },
  'india': { rate: 83, symbol: '₹', prefix: true }
};

export function formatLocalCurrency(priceUSD: number, country: string): string {
  const normalized = country.toLowerCase().trim();
  const config = CURRENCY_CONVERSIONS[normalized] || { rate: 1.00, symbol: '$', prefix: true };
  const localPrice = Math.round(priceUSD * config.rate);
  const formatted = localPrice.toLocaleString();
  return config.prefix ? `${config.symbol}${formatted}` : `${formatted}${config.symbol}`;
}
