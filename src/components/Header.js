import React from 'react'
import { Nav, Navbar, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FaReact, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { useAuth0 } from '../context/auth0-context'


const Header = () => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0()

  return (
    <Navbar className="flex-row-reverse" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{opacity:".8"}}>
      <Nav className="flex-row-reverse w-100 align-items-center">
        {!isLoading && !user &&
          <>
            <Button onClick={loginWithRedirect} className="btn-danger mx-3 d-none d-lg-block">
              SignUp
            </Button>
            <FaUserPlus size="1.2em" className="d-block d-lg-none" onClick={loginWithRedirect} />
            <Button onClick={loginWithRedirect} className="text-white btn-secondary mx-3 d-none d-lg-block">
              Login
            </Button>
            <FaSignInAlt size="1.2em" className="mr-3 d-block d-lg-none" onClick={loginWithRedirect} />
          </>
        }
        {!isLoading && user &&
          <>
            {isAuthLinks.map((link, i) =>
              <NavigationLink classItem={link.classItem} key={i} path={link.path} name={link.name} />
            )}
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="btn-danger mx-3 d-none d-lg-block"
            >
              Logout
            </Button>
            <FaSignOutAlt size="1.3rem" className="mx-3 d-block d-lg-none"
              onClick={() => logout({ returnTo: window.location.origin })}
            />
          </>
        }
        <LinkContainer className="m-auto pr-lg-5" to="/overview">
          <Navbar.Brand className="text-lg">
            <h4 className="m-0 p-0" style={{fontWeight: "700"}}>
              React <FaReact size="1.9em" color="rgb(89, 190, 255)" /> Finder
            </h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Nav>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {dropdownLinks.map((link, i) =>
            <NavigationLink key={i} path={link.path} name={link.name} />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default Header


const NavigationLink = ({name, path, classItem}) =>
  <LinkContainer className={`${classItem}`} to={`/${path}`}>
    <Nav.Link>{name}</Nav.Link>
  </LinkContainer>

const dropdownLinks = [
  { path: "", name: "HOME" },
  { path: "courses", name: "Courses" },
  { path: "resources", name: "Resourses" }
]


const isAuthLinks = [
  { path: "account", name: "ACCOUNT", classItem: "px-lg-3 d-none d-lg-block"  },
  { path: "account", name: <FaUserAlt size="1.3em"/> , classItem: "ml-3 d-block d-lg-none"  }
]
