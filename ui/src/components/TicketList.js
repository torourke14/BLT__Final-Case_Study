import React, { useEffect, useState } from 'react';
import TicketView from './TicketView';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from 'react-router-dom';
import Header from './Header';
import TicketPurchase from './TicketPurchase';

const TicketList = () => {

    const tickets = [
        {id:1, title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {id:2, title: 'concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        {id:3, title: 'movie', price: 23, userId: 'asdf', orderId: 'asdf', available: true}
        ]
    const renderTickets = () => {
        return tickets.map((ticket) => {
            return ( 
                <div>
                    
                    <li key={ticket.id} className="">
                       <Link to={`/tickets/${ticket.id}`}>
                            <p>{ticket.title}</p>
                       </Link>
                    </li>
                </div>
            )
        })
    }
    return (
            <div>            
                <div className="list-group">                
                    {renderTickets()}
                </div>
            </div>

    );

};

export default TicketList;
