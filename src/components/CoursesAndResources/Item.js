import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { useDataItems } from "../../contexts/dataItems-context"
import ItemModal from './ItemModal'


const Item = ({data}) => {
    const { setPickedItem, removePickedItem, pickedItems } = useDataItems()

    const handleClick = (e) => {
      e.target.id === 'add' && setPickedItem(`${[data.parent2]}-${[data.parent1]}-${[data.id]}`)
      e.target.id === 'remove' && removePickedItem(`${[data.parent2]}-${[data.parent1]}-${[data.id]}`)
    }

    return (
      <>
        {data &&
          <Card
            className="bg-dark text-light my-2 p-1 overflow-auto"
            style={{height:data.hasOwnProperty("price") ? "16rem" : "12rem"}}
          >
            <div className="d-flex justify-content-between">
              {data.hasOwnProperty("price") &&
                <Badge
                  variant={data.price.toLowerCase().includes("free") ? "danger" : "light"}>
                  {data.price}
                </Badge>
              }
              <img
                className="ml-auto"
                style={{height: '20px'}}
                src={require(`../../images/${data.parent1}.${ data.parent2 === "coursesData" ? "png" : "svg"}`)} alt={data.parent1}
              />

            </div>
            <Card.Header className='h5 pt-1'>
              {data.author}
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                {data.name}
              </Card.Text>
              <div className="mt-auto d-flex justify-content-between align-items-center">

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
}


export default Item
