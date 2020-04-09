import React from 'react'
import { AppConsumer } from "../context"
import Table from 'react-bootstrap/Table'
import ItemModal from './CoursesAndResources/ItemModal'


const CourseTable = ({data}) =>
    <AppConsumer>
      {({pickedItems, removePickedItem}) => {

        const AccountItemConverter = (pick) => data[pick.split("-")[1]]
        .filter(item => item.id === +pick.split("-")[2])[0]

        const handleClick = (item) => removePickedItem(`${[item.parent2]}-${[item.parent1]}-${[item.id]}`)

        return (
          <div  style={{height: "300px", overflow: "auto"}}>
            <Table className="my-3"  striped bordered hover variant="dark">
              <thead style={{height: "50px"}}>
                <tr >
                  <th>+/-</th>
                  {data.hasOwnProperty('react') && <th>Author</th>}
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {pickedItems.map(pick =>
                  data.hasOwnProperty(pick.split("-")[1])
                  &&
                    <tr key={AccountItemConverter(pick).id}>
                      <td>
                        <img
                          id="remove"
                          onClick={e => handleClick(AccountItemConverter(pick))}
                          style={{height: '30px', cursor:"pointer"}}
                          src={require(`../images/remove.png`)} alt="remove"
                        />
                      </td>
                      {data.hasOwnProperty('react') && <td>{AccountItemConverter(pick).author}</td>}
                      <td>{AccountItemConverter(pick).name}</td>
                      <td>
                        <ItemModal data={pick} func={AccountItemConverter}/>
                      </td>
                    </tr>
                )}
              </tbody>
            </Table>
          </div>
        )
      }}
    </AppConsumer>


export default CourseTable
