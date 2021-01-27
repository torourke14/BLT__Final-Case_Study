import React from 'react';
import {useState, useEffect} from 'react';
const  TicketTimer = (/*ticket*/) => {

    let [time, setTime] = useState(30);
    const ticket = {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true}
    useEffect(() => {
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    },[time])


    return (
        <div>
            <h1> Purchasing {ticket.title} Ticket</h1>
            <h2> You have {time} seconds left</h2>
        </div>
    );
}

export default TicketTimer;