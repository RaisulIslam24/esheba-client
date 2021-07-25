<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import Login from "./components/Login/Login";
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
        </Switch>
        <Footer />
    </Router>
=======
import logo from './logo.svg';
import './App.css';
import Features from './components/Features/Features';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mx-3">
     <Features></Features>
    </div>
>>>>>>> a312c5b92da2457a82d553398f6b0ac144aa0978
  );
}

export default App;
