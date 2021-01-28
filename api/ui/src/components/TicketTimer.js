import React from 'react';
import {useState, useEffect} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
const  TicketTimer = (/*ticket*/) => {

    let [time, setTime] = useState(2);
    const ticket = {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true}
    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
        // Dummy code for time expiration
        // if (time == -1){
        //     alert("YOU GET NOTHING! YOU LOSE! GOOD DAY SIR!")
        // }
    },[time]);

    return (
        <div>
            <h1> Purchasing {ticket.title} Ticket</h1>
            <h2> You have {time} seconds left</h2> 
            <button>PAY NOW</button>
        </div>
    );
}

export default TicketTimer;