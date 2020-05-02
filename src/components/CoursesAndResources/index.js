import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDataItems } from "../../contexts/dataItems-context";
import Items from "./Items";
import List from "./List";
import FilterSample from "../FilterSample";

const CoursesAndResources = ({ path, url, data, list }) => {
  const { coursesData, resourcesData } = useDataItems();
  return (
    <Switch>
      <Route exact path={path}>
        <FilterSample list={list} path={path} />
        {Object.entries(data).length > 0 && (
          <List data={list.map(items => data[items]).flat(1)} />
        )}
      </Route>
      <Route path={`${path}/:id`}>
        <Items data={path === "/courses" ? coursesData : resourcesData} />
      </Route>
    </Switch>
  );
};

export default CoursesAndResources;
