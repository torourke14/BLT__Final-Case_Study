import React, { useEffect, useState } from 'react';
import TicketView from './TicketView';
import {Link} from 'react-router-dom';
import Header from './Header';
import TicketPurchase from './TicketPurchase';
const TicketList = () => {

    const tickets = [
        {id:1, title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {id:2, title: 'concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        ]
    const [details, setDetails] = useState({isIndividual: false, ticket: {}})

    const renderTickets = () => {
        return tickets.map((ticket) => {
            return ( 
                <div>
                    <li key={ticket.id} className="">
                        <TicketView value={ticket} />
                    </li>
                    <button onClick={(ticket) => renderIndividualTicket(ticket)}>I want to buy!</button>
                </div>
            )
        })
    }
    const viewIndividual = (ticket) => {
        setDetails({isIndividual:true, ticket: ticket})
    }

    const renderIndividualTicket = (ticket) =>{
        return (
            <TicketPurchase value = {ticket} />
        )
    }
    return (
        <div>
            {/* <Route path="/tickets/:id" component={TicketPurchase}/>  */}
            <div className="list-group">                
                {details.isIndividual ? renderIndividualTicket() : renderTickets()}
            </div>
        </div>
    );
};

export default TicketList;
