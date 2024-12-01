import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateCore } from 'src/core/coreSlice';


import ReduxDemo from './ReduxDemo';



export default function Demo() {



  return (
    <section>
      <h1>Demo</h1>
      <ReduxDemo />
    </section>
  );

}