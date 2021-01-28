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

import React, {useState} from "react" 

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  //is user logged in
  const [user, setUser] = useState(false);

  let checkLogin = (isUser) => {
    setUser(isUser);
  }


  return (
    <Router>
      <div>
          <Header user={user}/>
          <Switch>
            <Route path="/" exact>
              <TicketList/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/signin">
              <SignIn user={user} checkLogin={checkLogin}/>
            </Route>
            <Route path="/selltickets">
              <NewTicket/>
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
