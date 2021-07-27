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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/brands">
          <Brands />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
