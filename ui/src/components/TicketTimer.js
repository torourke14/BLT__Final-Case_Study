import React from 'react';
import {useState, useEffect} from 'react';
const  TicketTimer = (ticket) => {

    let [time, setTime] = useState(30);

    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(time-1);
        }, 1000);
    },[time])
    return (
        <div>
            <h1> Purchasing {ticket.title}</h1>
            <h2> You have {time} seconds left</h2>
        </div>
    );
}

export default TicketTimer;