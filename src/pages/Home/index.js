import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Home() {
  return (
    <section>
      <NavLink to="/animal-form">AnimalForm</NavLink>
      <br />
    </section>
  );
}
