import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { AppConsumer } from "../../context"
import ItemModal from './ItemModal'


const Item = ({data}) =>
    <AppConsumer>
      {({setPickedItem, removePickedItem, pickedItems}) => {

        const handleClick = (e) => {
          e.target.id === 'add' && setPickedItem(`${[data.parent2]}-${[data.parent1]}-${[data.id]}`)
          e.target.id === 'remove' && removePickedItem(`${[data.parent2]}-${[data.parent1]}-${[data.id]}`)
        }

        return (
          <>
            {data &&
              <Card className="bg-dark text-light my-2 py-1 overflow-auto" style={{height:"16rem"}}>
                {data.hasOwnProperty("price") &&
                  <Badge
                    className="m-1 mr-auto"
                    variant={data.price.toLowerCase().includes("free") ? "danger" : "light"}>
                    {data.price}
                  </Badge>
                }
                <Card.Header className='h5 pt-1'>
                  {data.author}
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <Card.Text>
                    {data.name}
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-between">

                    <ItemModal data={data} />

                    { pickedItems.includes(`${[data.parent2]}-${[data.parent1]}-${[data.id]}`) ?
                      <img
                        id="remove"
                        onClick={handleClick}
                        style={{height: '30px', cursor:"pointer"}}
                        src={require(`../../images/remove.png`)} alt="remove"
                      /> :
                      <img
                        id="add"
                        onClick={handleClick}
                        style={{height: '30px', cursor:"pointer"}}
                        src={require(`../../images/add.png`)} alt="add"
                      />
                    }
                  </div>
                </Card.Body>
              </Card>
            }
          </>
        )
      }}
    </AppConsumer>


export default Item
