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
  );
}

export default App;
