import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Subscribe from './components/Subscribe/Subscribe';
import AboutUs from './components/AboutUs/AboutUs';
import FAQs from './components/FAQs/FAQs';
import Community from './components/Community/Community';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/faqs">
          <FAQs />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
