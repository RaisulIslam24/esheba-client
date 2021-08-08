import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllServices from "./components/AllServices/AllServices";
import Brands from "./components/Brands/Brands";
import ChatWithUs from "./components/ChatWithUs/ChatWithUs";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import AdminOrderList from "./components/Dashboard/AdminOrderList/AdminOrderList";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageService/ManageService";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import Login from "./components/Login/Login";
import Services from "./components/Services/Services";
import Subscribe from "./components/Subscribe/Subscribe";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import gif from './images/uu.gif';
import AboutUs from './components/AboutUs/AboutUs';

function App() {

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
    <>
      {
        isLoading ? <img style={gifStyle} src={gif} alt="" /> :

          <Router>
            {/* <NavBar /> */}
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
            </Switch>
            {/* <Footer /> */}
            <ChatWithUs />
          </Router>
      }
    </>
  );
}

export default App;
