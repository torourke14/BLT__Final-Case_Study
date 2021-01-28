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

import 'bootstrap/dist/css/bootstrap.min.css';

const TicketList = (props) => {
    
    const tickets = [
        {id:1, title: 'Baseball Game', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {id:2, title: 'Concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        {id:3, title: 'Movie', price: 23, userId: 'asdf', orderId: 'asdf', available: true}
        ]
    const renderTickets = () => {
        return tickets.map((ticket) => {
            if (ticket.available){
                return ( 
                    <div>
                        <li key={ticket.id} className="list-group-item">
                            {props.user
                                ? 
                                <Link to={`/tickets/${ticket.id}`}>
                                    <p>{ticket.title} - ${ticket.price}</p>
                                </Link>
                                : 
                                <p>{ticket.title} - ${ticket.price}</p>}
                           
                        </li>
                    </div>
                )
            }else{
                return ( 
                    <div>
                        <li key={ticket.id} className="list-group-item">
                            {props.user
                                ? 
                                <div>
                                    <p>{ticket.title} - ${ticket.price}</p>
                                    <p>Ticket Unavailable</p>
                                </div>
                                : 
                                <p>{ticket.title} - ${ticket.price}</p>}
                           
                        </li>
                    </div>
                )
            }
           
        })
    }

    const isLoggedIn = () => {
        if(!props.user){
            return (<p> Please sign in to buy tickets</p>)
        }
        
    }
    
    return (
            <div>      
                <h1> Tickets for Sale </h1>   
                <div> {isLoggedIn()} </div>
                <div className="list-group">                
                    {renderTickets()}
                </div>
            </div>

    );

};

export default TicketList;
