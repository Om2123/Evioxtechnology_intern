import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
  
import UserLayout from "./Layouts/Layout/userLayout"
// import ConnectionErrorHandler from "./Layouts/Error/errorHandler"

import Dashboard from "./containers/Dashboard/Dashboard"
import Auth from "./containers/Auth/Auth"
import Logout from "./containers/Auth/Logout/Logout"
import PageNotFound from "./containers/PageNotFound/PageNotFound"
import About from "./containers/Auth/About/About"
import SignIn from "./containers/Auth/SignIn"
import Courses from "./containers/Courses/Courses"

const RouteUser = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (
        <UserLayout>
          <Component />
        </UserLayout>
      )}
    />
  )
}

const App = () => {
  
  
  return (
    <BrowserRouter  >
      <Switch>
        {/* With Layout */}
        <RouteUser path="/" exact Component={Dashboard} />
        <RouteUser path="/courses" exact Component={Courses} />
        <RouteUser path="/about" exact Component={About} />
        <RouteUser path="/logout" Component={Logout} />
        {/* Without Layout */}
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={Auth} />
        {/* Page Not Found */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
  } 

export default (App)