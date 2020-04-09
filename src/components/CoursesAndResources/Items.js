import React from 'react'
import { useParams } from "react-router-dom"
import List from './List'
import About from '../About'
import QuickFacts from '../../data/QuickFacts'


const Items = ({data}) => {
  let { id } = useParams();
  return (
    <>
      <About
        title={QuickFacts[id].title}
        subtitle={QuickFacts[id].subtitle}
        list={QuickFacts[id].list}
      />
      {data.hasOwnProperty(id) &&
        <List
        data={data[id]}
        />
      }
    </>
  )
}


export default Items
