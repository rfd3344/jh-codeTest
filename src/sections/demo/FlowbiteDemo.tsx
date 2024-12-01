import React, { useEffect } from 'react';

import {
  Button,
  Alert,
  Avatar,

} from 'flowbite-react';

import viteImg from '/images/vite.svg';


export default function FlowbiteDemo() {

  return (
    <section>
      <h3>FlowbiteDemo</h3>
      <Button >Default</Button>
      <Alert color="failure" >
        Change a few things up and try submitting again.
      </Alert>
      <div className="flex flex-wrap gap-2">
        <Avatar img={viteImg} alt="avatar of Jese" rounded bordered />
        <Avatar img={viteImg} bordered />
      </div>
    </section>
  );

}