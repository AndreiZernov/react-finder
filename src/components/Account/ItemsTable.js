import React from 'react'
import { useDataItems } from "../../contexts/dataItems-context"
import Table from 'react-bootstrap/Table'
import ItemModal from '../CoursesAndResources/ItemModal'
import AccountModal from './AccountModal'


const ItemsTable = ({data}) => {
  const { pickedItems, removePickedItem, newCourses, removeNewCourses } = useDataItems()

  const AccountItemConverter = (pick) => data[pick.split("-")[1]]
  .filter(item => item.id === +pick.split("-")[2])[0]

  const handleClick = (item) => removePickedItem(`${[item.parent2]}-${[item.parent1]}-${[item.id]}`)

  return (
    <div style={{height: "300px", overflow: "auto"}}>
      <Table className="my-3 text-center" style={{fontSize:".8rem"}} striped bordered hover variant="dark" size="sm" >
        <thead style={{height: "30px"}}>
          <tr>
            <th style={{width: "40px"}}>Topic</th>
            {data.hasOwnProperty('react') && <th>Author</th>}
            <th>Name</th>
            <th style={{width:"150px"}}>Description</th>
            <th style={{width: "40px"}}>+/-</th>
          </tr>
        </thead>
        <tbody>
          {pickedItems.map(pick =>
            data.hasOwnProperty(pick.split("-")[1])
            &&
              <TableSample key={AccountItemConverter(pick).id} data={AccountItemConverter(pick)}  handleClick={handleClick} AccountItemConverter={AccountItemConverter} />
          )}
          
          {newCourses.length > 0 &&  newCourses.map(pick =>
            data.hasOwnProperty(pick.parent1)
            &&
              <TableSample key={pick.id} data={pick} handleClick={handleClick} removeNewCourses={removeNewCourses} />
          )}
        </tbody>
      </Table>
    </div>
  )
}


export default ItemsTable



const TableSample = ({data, handleClick, AccountItemConverter, removeNewCourses}) =>
    <tr key={data.id}>
      <td style={{verticalAlign: "middle"}}>
        <img
          onClick={() => window.open(data.link, "_blank")}
          className="ml-auto"
          style={{height: '30px', cursor: "pointer"}}
          src={require(`../../images/${data.parent1}.${ data.parent2 === "coursesData" ? "png" : "svg"}`)} alt={data.parent1}
        />
      </td>

      {data.parent2 === 'coursesData' && <td style={{verticalAlign: "middle"}}>{data.author}</td>}
      <td style={{verticalAlign: "middle"}}>
        {data.name}
      </td>
      <td style={{width:"150px"}} className="d-flex justify-content-between text-left">
        <ItemModal data={data} func={AccountItemConverter}/>
        <AccountModal data="Edit" editData={data} />
      </td>
      <td style={{verticalAlign: "middle"}}>
        <img
          id="remove"
          onClick={data.owner === "user" ? () => removeNewCourses(data) : () => handleClick(data) }
          style={{height: '30px', cursor:"pointer"}}
          src={require(`../../images/remove.png`)} alt="remove"
        />
      </td>
    </tr>
