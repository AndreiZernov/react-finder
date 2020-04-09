import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Consumer } from "./Context"

import MainPage from './pages/MainPage'
import OverviewPage from './pages/OverviewPage'
import CoursesPage from './pages/CoursesPage'
import ResourcesPage from './pages/ResourcesPage'
import NotFoundPage from './pages/NotFoundPage'
import LogIn from './pages/Auth/LogIn'
import SignUp from './pages/Auth/SignUp'
import Account from './pages/Account'
// import Profile from './Account/AccountInfo/InfoSettings/Profile'
// import MyLinks from './Account/MyLinks'
// import Settings from './Account/Settings'


const Routes = () =>
  // <Consumer>
  //   {({ isAuth }) =>
      <Switch>
        { openRoutes.map(route =>
          <Route key={route.id.toString()} exact={route.exact} path={route.path} component={route.Component} />)}
        {/* { protectedRoures.map(route =>
          <Route
            key={route.id.toString()}
            exact path={route.path}
            children={!isAuth ? <Redirect to="/login" /> : route.Component}
        />)} */}
        <Route component={NotFoundPage} />
      </Switch>
          // }
          // </Consumer>


const openRoutes = [
  { id: 0, path: '/', Component: MainPage, exact: true },
  { id: 1, path: '/overview', Component: OverviewPage, exact: true },
  { id: 2, path: '/courses', Component: CoursesPage, exact: false },
  { id: 3, path: '/resources', Component: ResourcesPage, exact: false },
  { id: 4, path: '/login', Component: LogIn, exact: true },
  { id: 5, path: '/signup', Component: SignUp, exact: true },
  { id: 6, path: '/account', Component: Account, exact: false },
]

// const protectedRoures = [
//   { id: 1, path: '/profile', Component: Profile },
//   // { id: 0, path: '/mylinks', Component: MyLinks },
//   // { id: 0, path: '/settings', Component: Settings },
//   { id: 4, path: '/react', Component: <CoursePage /> },
//   { id: 5, path: '/react_native', Component: <CoursePage /> },
//   { id: 6, path: '/redux', Component: <CoursePage /> },
//   { id: 7, path: '/graphql', Component: <CoursePage /> },
//   { id: 8, path: '/pathway', Component: <CoursePage /> },
//   { id: 9, path: '/job_search', Component: <SecPage /> },
//   { id: 10, path: '/podcasts', Component: <SecPage /> },
//   { id: 11, path: '/resources', Component: <SecPage /> },
//   { id: 12, path: '/html_css', Component: <SecPage /> }
// ]


export default Routes
