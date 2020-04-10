import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
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

  return (
    <AppContext.Provider value={{
      coursesData, resourcesData,
      setPickedItem, removePickedItem, pickedItems,
      filteredCoursesData, setFilteredCoursesData,
      filteredResourcesData, setFilteredResourcesData,
      newCourses, setNewCourses, removeNewCourses
    }} >
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer

export { AppProvider, AppConsumer, AppContext }
