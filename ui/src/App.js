import Header from "./components/Header"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import NewTicket from "./components/NewTicket"
import TicketList from "./components/TicketList"
import TicketPurchase from "./components/TicketPurchase"
import TicketView from "./components/TicketView"
import TicketTimer from "./components/TicketTimer"
import PaymentModal from './components/PaymentModal'
import OrderList from "./components/OrderList"

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Switch>
            <Route path="/" component={TicketList} exact/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/selltickets" component={NewTicket}/>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
