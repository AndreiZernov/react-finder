import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppConsumer } from "../context"
import CoursesAndResources from '../components/CoursesAndResources'
import ItemsLinks from '../components/CoursesAndResources/ItemsLinks'




const ResourcesPage = () => {
  let { path, url } = useRouteMatch();
  return (
      <AppConsumer>
        {({filteredResourcesData}) =>
          <div className="my-5 py-5">
            <ItemsLinks path={path} url={url} list={List}/>
            <CoursesAndResources
              path={path}
              url={url}
              data={filteredResourcesData}
              list={List}
            />
          </div>
        }
      </AppConsumer>
    )
}

const List = [ "job_search", "podcasts", "resources", "html_css" ]

export default ResourcesPage
