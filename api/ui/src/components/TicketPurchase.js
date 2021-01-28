import React, { useState, useEffect, useParams} from 'react';
import { render } from 'react-dom';
import Header from './Header';
import PaymentModal from './PaymentModal';
import { Router, Link, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import _ from 'lodash'
const TicketPurchase = (props) => { 
    let history = useHistory();
    let ticketID = props.match.params.ticketID;
    ticketID = parseInt(ticketID)
    //DO NOT CHANGE THE CODE ABOVE


    //CHANGE THE CODE BELOW FOR THE API CALL TO GET THE APPROPRIATE TICKET
    const tickets = [
        {id:1, title: 'Basketball', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {id:2, title: 'Concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        {id:3, title: 'Movie', price: 23, userId: 'asdf', orderId: 'asdf', available: true}
        ]
    const ticket = _.find(tickets, {id: ticketID})
    //REPLACE THE ABOVE WITH AN API CALL

    const goBack = () => history.goBack();

    const renderGoBackButton = () =>{
        return (
            <button className="btn-sm btn-primary" onClick={goBack}>Go Back</button>
        )
    }
    const renderBuyBtn = () => {
        if (ticket.available){
            return (
                <div>
                    <PaymentModal ticket={ticket}/>
                </div>
            )
        }
    }
    return (
        <div>
            
            <h1> {ticket.title} {renderGoBackButton()} </h1>
            <ul className="list-group">
                <li className="list-group-item"> Price - ${ticket.price}</li>
                <li className="list-group-item"> Status - {ticket.available? "Available": "Unavailable"}</li>
            </ul>
            <br/>
            
            
               
            
            
            {renderBuyBtn()}
            
        </div>

    )

}


export default TicketPurchase;
