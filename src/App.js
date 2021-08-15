import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brands from "./components/Brands/Brands";
import ChatWithUs from "./components/ChatWithUs/ChatWithUs";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AddService from "./pages/Dashboard/AddService/AddService";
import AdminOrderList from "./pages/Dashboard/AdminOrderList/AdminOrderList";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./pages/Dashboard/ManageService/ManageService";
import OrderList from "./pages/Dashboard/OrderList/OrderList";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Subscribe from "./components/Subscribe/Subscribe";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import gif from './images/uu.gif';
import AboutUs from './components/AboutUs/AboutUs';
import { createContext } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import AllServices from './pages/AllServices/AllServices';
import Services from './pages/ServiceDetails/ServiceDetails';
import Consumer from './pages/Dashboard/Consumer/Consumer';
import ServiceProvider from './pages/Dashboard/ServiceProvider/ServiceProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './pages/Dashboard/ServiceList/ServiceList';
import SingleServiceDash from './pages/Dashboard/ServiceList/SingleServiceDash/SingleServiceDash';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const gifStyle = {
    width: "100vw",
    height: "100vh"
  }
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {
        isLoading ? <img style={gifStyle} src={gif} alt="" /> :

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/blogs">
                <AllBlogs />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/blogDetails/:blogId">
                <BlogDetails />
              </Route>
              <Route path="/services/:id">
                <Services />
              </Route>
              <Route path="/services">
                <AllServices />
              </Route>
              <Route path="/subscribe">
                <Subscribe />
              </Route>
              <Route path="/brands">
                <Brands />
              </Route>

              {/* Dashboard Item */}
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/review">
                <AddReview />
              </Route>
              <Route path="/AdminOrderList">
                <AdminOrderList />
              </Route>
              <Route path="/orderList">
                <OrderList />
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin />
              </Route>
              <Route path="/orderList">
                <orderList />
              </Route>
              <Route path="/addService">
                <AddService />
              </Route>
              <Route path="/manageServices">
                <ManageServices />
              </Route>
              <Route path="/consumersList">
                <Consumer />
              </Route>
              <Route path="/serviceProvidersList">
                <ServiceProvider />
              </Route>
              <Route path="/serviceList">
                <ServiceList />
              </Route>
              <Route path="/service/:id">
                <SingleServiceDash />
              </Route>
              {/* Dashboard end */}
            </Switch>
            <ChatWithUs />
          </Router>
      }
    </userContext.Provider>
  );
}

export default App;
