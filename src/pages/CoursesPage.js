import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppConsumer } from "../context"
import CoursesAndResources from '../components/CoursesAndResources'
import ItemsLinks from '../components/CoursesAndResources/ItemsLinks'
import Recommend from '../components/Recommend'



const CoursesPage = () => {
  let { path, url } = useRouteMatch();
  return (
    <AppConsumer>
      {({filteredCoursesData}) =>
          <div className="my-5 py-5">
            <ItemsLinks path={path} url={url} list={List}/>
            <CoursesAndResources
              path={path}
              url={url}
              data={filteredCoursesData}
              list={List}
            />
            <Recommend />
          </div>
        }
    </AppConsumer>
  )
}


const List = [ "react", "react_native", "redux", "graphql", "pathway" ]

export default CoursesPage
