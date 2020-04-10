import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileAndMenu from './ProfileAndMenu'
import ItemsTables from './ItemsTables'




const Account = () =>
    <Container className="py-5 my-5">
      <ProfileAndMenu />

      <ItemsTables />
    </Container>


export default Account
