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
import ServiceProvider from './components/ServiceProvider/ServiceProvider';
import Consumer from './components/Consumer/Consumer';
import Shipment from './components/Shipment/Shipment';

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
    
    
    
    <Route path="/loadAll/service-provider">
      <ServiceProvider></ServiceProvider>

    </Route>
    <Route path="/loadAll/consumer">
      <Consumer></Consumer>

    </Route>
    <Route path="/shipment">
      <Shipment></Shipment>


    </Route>
    
   
  </Switch>
 
</Router>






  );
}

export default App;
