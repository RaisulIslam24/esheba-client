import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Brands from "./components/Brands/Brands";
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
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
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
      <Footer />
    </Router>
  );
}

export default App;
