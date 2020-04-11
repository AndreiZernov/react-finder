import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileAndMenu from './ProfileAndMenu'
import Tables from './Tables'


const Account = () =>
    <Container className="py-5 my-5">
      <ProfileAndMenu />

      <Tables />
    </Container>


export default Account
