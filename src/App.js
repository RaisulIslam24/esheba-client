import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Subscribe from './components/Subscribe/Subscribe';
import Brands from './components/Brands/Brands';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AdminOrderList from './components/Dashboard/AdminOrderList/AdminOrderList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import ManageServices from './components/Dashboard/ManageService/ManageService';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/aboutUs">
          <AboutUs />
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
    </Router>
  );
}

export default App;
