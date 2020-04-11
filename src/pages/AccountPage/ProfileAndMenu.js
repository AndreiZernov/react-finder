import React from 'react'
import { useAuth0 } from '../../contexts/auth0-context'
import { Row, Col, Card } from 'react-bootstrap'
import AccountModal from '../../components/Account/AccountModal'


const ProfileAndMenu = () => {
  const uploadedImage = React.useRef(null);
  const { user } = useAuth0()

  return (
     <Row className="justify-content-between  mx-1">
       <Col lg={6} border="secondary" bg="dark" as={Card} className="mx-auto d-flex flex-column mb-3" >
         <p className="text-center h2 pt-2">Profile</p>
         <div className="card bg-secondary border-secondary rounded-circle m-auto">
           <img ref={uploadedImage} src={user ? user.picture : require(`../../images/account.png`)} style={{height:"120px", width: "120px"}} alt="Account" className="text-center rounded-circle m-auto"></img>

         </div>
         <p className="text-center h5 p-2">{user ? user.nickname : "User"}</p>
       </Col>

       <Col lg={6}  className="d-flex flex-column" >
         {Buttons(uploadedImage).map(btn =>
           <AccountModal
             key={btn.name}
             data={btn.name}
             uploadedImage={btn.uploadedImage}
             list={btn.list}
           />
         )}
       </Col>
     </Row>
  )
}


const Buttons = (uploadedImage) => [
  { name: "Edit Profile",
    uploadedImage: uploadedImage,
    list:
    [
      { id: "validation1", type: "file" },
      { id: "validation2", type: "text", placeholder: "User Name" },
      { id: "validation3", type: "text", placeholder: "Country" }
    ]
  },
  { name: "Add Your Links"},
  { name: "Add Your Projects"},
  { name: "Contact Us"},
  { name: "Settings"}
]


export default ProfileAndMenu
