import React from 'react'
import { useParams } from "react-router-dom"
import List from './List'
import About from '../About'


const Items = ({data}) => {
  let { id } = useParams();
  return (
    <>
      <About
        title={data[id][0].title}
        subtitle={data[id][0].content}
        list={data[id][0].list}
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
