import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDataItems } from "../contexts/dataItems-context"
import CoursesAndResources from '../components/CoursesAndResources'
import ItemsLinks from '../components/CoursesAndResources/ItemsLinks'



const CoursesPage = () => {
  let { path, url } = useRouteMatch();
  const { filteredCoursesData } = useDataItems()

  return (
    <div className="my-5 py-5">
      <ItemsLinks path={path} url={url} list={List}/>
      <CoursesAndResources
        path={path}
        url={url}
        data={filteredCoursesData}
        list={List}
      />
    </div>
  )
}


const List = [ "react", "react_native", "redux", "graphql", "pathway" ]

export default CoursesPage
