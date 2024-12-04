import React, { useEffect } from 'react';

import {
  Button,
  Alert,
  Avatar,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';

import viteImg from '/images/vite.svg';


export default function FlowbiteDemo() {

  return (
    <section>
      <h3>FlowbiteDemo</h3>
      <Button >Default</Button>
      <Button color="red" >Default</Button>
      <Alert color="failure" >
        Change a few things up and try submitting again.
      </Alert>
      <div className="flex flex-wrap gap-2">
        <Avatar img={viteImg} alt="avatar of Jese" rounded bordered />
        <Avatar img={viteImg} bordered />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required addon="@" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username3" color="success" value="Your name" />
        </div>
        <TextInput
          id="username"
          placeholder="Bonnie Green"
          required
          color="success"
          helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          }
        />
      </div>

      <div className="grid grid-flow-row auto-rows-max">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="grid grid-flow-col auto-cols-max">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

    </section>
  );

}