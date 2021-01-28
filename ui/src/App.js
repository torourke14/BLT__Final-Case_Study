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
import SignOut from "./components/SignOut";

import React, {useState} from "react" 

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  //sets logged in user
  const [user, setUser] = useState("");

  let setUserLogin = (userSignin) => {
    setUser(userSignin);
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
              <SignIn setUserLogin={setUserLogin}/>
            </Route>
            <Route path="/tickets/new">
              <NewTicket/>
            </Route>
            <Route path="/myorders">
              <OrderList/>
            </Route>
            <Route path="/signout">
              <SignOut logout={setUserLogin}/>
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
