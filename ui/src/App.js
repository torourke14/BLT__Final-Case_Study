import Header from "./components/Header"
import SignUp from "./components/SignUp"
import NewTicket from "./components/NewTicket"
import TicketList from "./components/TicketList"
import TicketPurchase from "./components/TicketPurchase"
import TicketView from "./components/TicketView"
import TicketTimer from "./components/TicketTimer"
import PaymentModal from './components/PaymentModal'
import OrderList from "./components/OrderList"

import './App.css';

function App() {
  return (
    <div>
        <OrderList />
    </div>
  );
}

export default App;
