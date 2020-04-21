import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDataItems } from "../contexts/dataItems-context"
import CoursesAndResources from '../components/CoursesAndResources'
import ItemsLinks from '../components/CoursesAndResources/ItemsLinks'


const ResourcesPage = () => {
  let { path, url } = useRouteMatch();
  const { filteredResourcesData, loading } = useDataItems()

  return (
    <div className="my-5 py-5">
      {
        !loading &&
        <>
          <ItemsLinks path={path} url={url} list={List}/>
          <CoursesAndResources
            path={path}
            url={url}
            data={filteredResourcesData}
            list={List}
          />
        </>
      }
    </div>
  )
}

const List = [ "job_search", "podcasts", "resources", "html_css" ]

export default ResourcesPage
