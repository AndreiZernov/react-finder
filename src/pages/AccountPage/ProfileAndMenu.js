import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import { Row, Col, Card, Form } from "react-bootstrap";
import AccountModal from "../../components/Account/AccountModal";

const ProfileAndMenu = () => {
  const { user } = useAuth0();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [userName, setUserName] = React.useState("");
  const [inputAllow, setInputAllow] = React.useState(false);

  console.log(inputAllow);

  React.useEffect(() => {
    userName === "user" && setUserName(user.nickname);
  }, [userName, user.nickname]);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputAllow(false);
  };
  const handleChange = e => setUserName(e.target.value);

  return (
    <Row className="justify-content-between  mx-1">
      <Col
        lg={6}
        border="secondary"
        bg="dark"
        as={Card}
        className="mx-auto d-flex flex-column mb-3"
      >
        <p className="text-center h2 pt-2">Profile</p>
        <div
          className="card bg-secondary border-secondary rounded-circle m-auto"
          style={{ height: "120px", width: "120px", overflow: "hidden" }}
        >
          <Form.Control
            className="d-none"
            type="file"
            ref={imageUploader}
            accept="image/*"
            multiple={false}
            onChange={handleImageUpload}
          />
          <img
            onClick={() => imageUploader.current.click()}
            ref={uploadedImage}
            src={user ? user.picture : require(`../../images/account.png`)}
            style={{ width: "100%", margin: "auto" }}
            alt="Account"
            className="text-center"
          ></img>
        </div>
        <Form onSubmit={handleSubmit}>
          <div onClick={() => setInputAllow(true)}>
            <Form.Control
              className={!inputAllow && "d-none"}
              type="text"
              onChange={handleChange}
              value={userName}
            />
            <p
              className={
                inputAllow ? "d-none text-center h5 p-2" : "text-center h5 p-2"
              }
            >
              {userName ? userName : user ? user.nickname : null}
            </p>
          </div>
        </Form>
      </Col>

      <Col lg={6} className="d-flex flex-column">
        {Buttons(uploadedImage).map(btn => (
          <AccountModal
            key={btn.name}
            data={btn.name}
            uploadedImage={btn.uploadedImage}
            list={btn.list}
          />
        ))}
      </Col>
    </Row>
  );
};

const Buttons = uploadedImage => [
  { name: "Profile Statistics" },
  { name: "Add Your Links" },
  { name: "Add Your Projects" },
  { name: "Contact Us" },
  { name: "Settings" }
];

export default ProfileAndMenu;
