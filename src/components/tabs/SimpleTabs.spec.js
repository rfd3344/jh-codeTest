import assert from 'assert';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { MockTheme } from 'src/utils/testUtils';

import { SimpleTabs } from './SimpleTabs';

describe('SimpleTabs', function () {
  it('should render TextFieldHookForm', async function () {
    const tabs = [
      { label: 'tab1', panel: <div>panel1</div> },
      { label: 'tab2', panel: <div>panel2</div> },
      { label: 'tab3', panel: <div>panel3</div> },
    ];

    const { container, debug } = render(
      <MockTheme>
        <SimpleTabs tabs={tabs} />
      </MockTheme>
    );
    // debug();

    const tabpanel0 = container.querySelector('#tabpanel-0');
    const tabpanel1 = container.querySelector('#tabpanel-1');
    assert.equal(tabpanel0.innerHTML, '<div>panel1</div>');
    assert.equal(tabpanel1.innerHTML, '<div>panel2</div>');

    const tabNodeList = container.querySelectorAll(
      '.MuiTabs-root .MuiButtonBase-root'
    );
    assert.equal(tabNodeList.length, 3);

    fireEvent.click(tabNodeList[2], { target: { value: 'nextValue' } });

    await waitFor(() => {
      assert(tabNodeList[2].classList.contains('Mui-selected'));
    });
  });
});
