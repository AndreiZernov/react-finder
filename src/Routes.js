import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MainPage from "./pages/MainPage";
import OverviewPage from "./pages/OverviewPage";
import CoursesPage from "./pages/CoursesPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AccountPage from "./pages/AccountPage";

const Routes = () => {
  let location = useLocation();
  return (
    <Route path="*">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            {openRoutes.map((route) => (
              <Route
                key={route.id.toString()}
                exact={route.exact}
                path={route.path}
                component={route.Component}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Route>
  );
};

const openRoutes = [
  { id: 0, path: "/", Component: MainPage, exact: true },
  { id: 1, path: "/overview", Component: OverviewPage, exact: true },
  { id: 2, path: "/courses", Component: CoursesPage, exact: false },
  { id: 3, path: "/resources", Component: ResourcesPage, exact: false },
  { id: 4, path: "/account", Component: AccountPage, exact: false },
];

export default Routes;
