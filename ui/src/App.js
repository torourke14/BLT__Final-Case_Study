import Header from './components/Header'
import SignUp from "./components/SignUp"
import NewTicket from "./components/NewTicket"
import TicketList from "./components/TicketList"
import TicketPurchase from "./components/TicketPurchase"
import TicketView from "./components/TicketView"

import './App.css';

function App() {
  return (
    <div>
		<Header></Header>
		<SignUp></SignUp>
		<NewTicket></NewTicket>
        <TicketList></TicketList>
        <TicketView></TicketView>
        <TicketPurchase></TicketPurchase>
    </div>
  );
}

export default App;
