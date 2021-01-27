import Header from "./components/Header"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import NewTicket from "./components/NewTicket"
import TicketList from "./components/TicketList"
import TicketPurchase from "./components/TicketPurchase"
import TicketView from "./components/TicketView"

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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
