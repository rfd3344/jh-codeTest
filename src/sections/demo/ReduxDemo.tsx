import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateCore } from 'src/core/coreSlice';


export default function ReduxDemo() {

  const core = useSelector((state: any) => state.core);
  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch(updateCore({ testMessage: 'testMessage', testDate: Date() }));
  };

  return (
    <section>
      <h3>ReduxDemo</h3>

      <button onClick={handleClick}>aaaa</button>

      <pre>
        {JSON.stringify(core, null, ' ')}
      </pre>
    </section>
  );

}