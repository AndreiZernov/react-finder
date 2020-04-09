import React from 'react'
import Hero from '../../components/Hero'
import FormSample from '../../components/FormSample'


const LogIn = () =>
  <>
    <Hero
      title="Please LogIn"
      subtitle=<FormSample list={List} />
    />
  </>


const List = [
  { id: "validation1", type: "text", placeholder: "User Name" },
  { id: "validation2", type: "password", placeholder: "Password" }
]

export default LogIn
