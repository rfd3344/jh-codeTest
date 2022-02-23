import assert from 'assert';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { MockTheme } from 'src/utils/testUtils';

import { TextFieldHookForm } from './TextFieldHookForm';

describe('TextFieldHookForm', function () {
  it('should render TextFieldHookForm', async function () {
    let value = '';
    const handleChange = (e) => {
      value = e.target.value;
    };
    const { queryAllByTestId, queryAllByText } = render(
      <MockTheme>
        <TextFieldHookForm
          name="name"
          label="labelTest"
          value="value"
          onChange={handleChange}
        />
      </MockTheme>
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
