import assert from 'assert';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { InputField } from './InputField';

describe('InputField', function () {
  it('should render InputField', async function () {
    let value = '';
    const handleChange = (e) => {
      value = e.target.value;
    };
    const { queryAllByTestId, queryAllByText } = render(
      <InputField label="labelTest" value="AUD" onChange={handleChange} />
    );
    const label = queryAllByText('labelTest');
    const textField = queryAllByTestId('textField-input');
    assert.equal(label.length, 1);
    assert.equal(textField.length, 1);
    fireEvent.change(textField[0], { target: { value: 'nextValue' } });

    await waitFor(() => {
      assert.equal(value, 'nextValue');
    });
  });
});
