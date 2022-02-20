import assert from 'assert';

import { RATE_RUL, formatConversionRateUrl, toCurrency } from './currencyUtils';

describe('currencyUtils', function () {
  describe('formatConversionRateUrl', function () {
    it('should generate the url', function () {
      const url = formatConversionRateUrl({
        amount: '10',
        sell: 'AUD',
        buy: 'USD',
        fixed: 'buy',
      });
      const expectedUrl = `${RATE_RUL}?Amount=10&Sell=AUD&Buy=USD&Fixed=buy`;
      assert.equal(url, expectedUrl);
    });
  });
  describe('toCurrency', function () {
    it('should get correct currency', function () {
      const currency = toCurrency(100);
      assert.equal(currency, '$100.00');
    });
    it('should get correct currency', function () {
      const currency = toCurrency(100, 'AUD');
      assert.equal(currency, 'A$100.00');
    });
  });
});
