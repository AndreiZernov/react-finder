import React, { useState, useEffect, useContext, createContext } from 'react'

const DataItemsContext = createContext()

const useDataItems = () => useContext(DataItemsContext)

const DataItemsProvider = ({children}) => {
  const [ coursesData ] = useState(require("../data/CoursesData").default)
  const [ resourcesData ] = useState(require("../data/ResourcesData").default)
  const [ filteredCoursesData, setFilteredCoursesData ] = useState(coursesData)
  const [ filteredResourcesData, setFilteredResourcesData ] = useState(resourcesData)
  const [ pickedItem, setPickedItem ] = useState("")
  const [ pickedItems, setPickedItems ] = useState([])
  const [ newCourses, setNewCourses ] = useState('')


  useEffect(() => {
    pickedItem && !pickedItems.includes(pickedItem) && setPickedItems(pickedItems => [...pickedItems, pickedItem])
    setPickedItem('')
  }, [pickedItem, pickedItems])


  const removePickedItem = (id) => setPickedItems(pickedItems.filter(item => item !== id))
  const removeNewCourses = (course) => setNewCourses(newCourses.filter(item => item.id !== course.id))


  const dataItems = {
    coursesData,
    resourcesData,
    setPickedItem, removePickedItem, pickedItems,
    filteredCoursesData, setFilteredCoursesData,
    filteredResourcesData, setFilteredResourcesData,
    newCourses, setNewCourses, removeNewCourses
  }

  return (
    <DataItemsContext.Provider value={dataItems} >
      {children}
    </DataItemsContext.Provider>
  )
}

const DataItemsConsumer = DataItemsContext.Consumer

export { DataItemsProvider, DataItemsConsumer, DataItemsContext, useDataItems }
