import assert from 'assert';
import { render } from '@testing-library/react';

import { CurrencySelector } from './CurrencySelector';

describe('CurrencySelector', function () {
  it('should render CurrencySelector', async function () {
    const { queryAllByTestId, queryAllByText } = render(
      <CurrencySelector label="labelTest" value="AUD" />
    );
    const select = queryAllByTestId('currency-select');
    const label = queryAllByText('labelTest');
    assert.equal(select.length, 1);
    assert.equal(label.length, 1);
  });
});
