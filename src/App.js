import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import AllServices from './components/AllServices/AllServices';

function App() {
  return (


<Router>

  <Switch>
   
    <Route  path="/services/:id">
      <Services/>
    </Route>
    <Route exact path="/">
    <Features></Features>
    </Route>
    <Route  path="/services">
    <AllServices></AllServices>
    </Route>
    
   
  </Switch>
 
</Router>






  );
}

export default App;
