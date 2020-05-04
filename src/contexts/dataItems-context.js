import React, { useState, useEffect, useContext, createContext } from "react";
import Client from "../contentful";

const DataItemsContext = createContext();

const useDataItems = () => useContext(DataItemsContext);

const DataItemsProvider = ({ children }) => {
  const [coursesData, setCoursesData] = useState({});
  const [resourcesData, setResourcesData] = useState({});
  const [filteredCoursesData, setFilteredCoursesData] = useState();
  const [filteredResourcesData, setFilteredResourcesData] = useState();
  const [pickedItem, setPickedItem] = useState("");
  const [pickedItems, setPickedItems] = useState([]);
  const [newCourses, setNewCourses] = useState("");
  const [loading, setLoading] = useState(true);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let img = "http:" + item.fields.img.fields.file.url;
      let course = { ...item.fields, img };
      return course;
    });
    return tempItems;
  };

  useEffect(() => {
    async function getData() {
      try {
        let respReact = await Client.getEntries({
          content_type: "coursesData",
        });
        let respReactNative = await Client.getEntries({
          content_type: "reactNative",
        });
        let respRedux = await Client.getEntries({ content_type: "redux" });
        let respGraphQl = await Client.getEntries({ content_type: "graphql" });
        let respPathway = await Client.getEntries({ content_type: "pathway" });
        let respResources = await Client.getEntries({
          content_type: "resources",
        });
        let respJobSearch = await Client.getEntries({
          content_type: "jobSearch",
        });
        let respHtmlCss = await Client.getEntries({ content_type: "htmlCss" });
        let respPodcasts = await Client.getEntries({
          content_type: "podcasts",
        });

        let courseObj = {
          react: formatData(respReact.items),
          react_native: formatData(respReactNative.items),
          redux: formatData(respRedux.items),
          graphql: formatData(respGraphQl.items),
          pathway: formatData(respPathway.items),
        };

        let resourcesObj = {
          resources: formatData(respResources.items),
          job_search: formatData(respJobSearch.items),
          podcasts: formatData(respPodcasts.items),
          html_css: formatData(respHtmlCss.items),
        };

        setCoursesData(courseObj);
        setFilteredCoursesData(courseObj);

        setResourcesData(resourcesObj);
        setFilteredResourcesData(resourcesObj);

        setLoading(false);
      } catch (e) {
        // console.log(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    pickedItem &&
      !pickedItems.includes(pickedItem) &&
      setPickedItems((pickedItems) => [...pickedItems, pickedItem]);
    setPickedItem("");
  }, [pickedItem, pickedItems]);

  const removePickedItem = (id) =>
    setPickedItems(pickedItems.filter((item) => item !== id));
  const removeNewCourses = (course) =>
    setNewCourses(newCourses.filter((item) => item.id !== course.id));

  const dataItems = {
    loading,
    coursesData,
    resourcesData,
    setPickedItem,
    removePickedItem,
    pickedItems,
    filteredCoursesData,
    setFilteredCoursesData,
    filteredResourcesData,
    setFilteredResourcesData,
    newCourses,
    setNewCourses,
    removeNewCourses,
  };

  return (
    <DataItemsContext.Provider value={dataItems}>
      {children}
    </DataItemsContext.Provider>
  );
};

const DataItemsConsumer = DataItemsContext.Consumer;

export { DataItemsProvider, DataItemsConsumer, DataItemsContext, useDataItems };
