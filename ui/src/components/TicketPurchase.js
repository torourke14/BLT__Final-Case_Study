import React, { useState, useEffect, useParams} from 'react';
import { render } from 'react-dom';
import Header from './Header';
import PaymentModal from './PaymentModal';
import { Router, Link, useHistory } from "react-router-dom";

import _ from 'lodash'
const TicketPurchase = (props) => { 
    let history = useHistory();
    let ticketID = props.match.params.ticketID;
    ticketID = parseInt(ticketID)
    //DO NOT CHANGE THE CODE ABOVE


    //CHANGE THE CODE BELOW FOR THE API CALL TO GET THE APPROPRIATE TICKET
    const tickets = [
        {id:1, title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {id:2, title: 'concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        {id:3, title: 'movie', price: 23, userId: 'asdf', orderId: 'asdf', available: true}
        ]
    const ticket = _.find(tickets, {id: ticketID})
    //REPLACE THE ABOVE WITH AN API CALL

    const goBack = () => history.goBack();

    const renderGoBackButton = () =>{
        return (
            <btn btn-sm btn-primary onClick={goBack}>Go Back</btn>
        )
    }
    const renderBuyBtn = () => {
        if (ticket.available){
            return (
                <div>
                    <PaymentModal ticket={ticket}/>
                </div>
            )
        }else{
            return (
                <button>Unavailable</button>
            )
        }
    }
    return (
        <div>
            {renderGoBackButton()}
            <h1>Ticket Purchase</h1>
            <h1>{ticket.title}</h1>
            <h1>{ticket.price}</h1>
            <h1>{ticketID}</h1>
            {renderBuyBtn()}
        </div>

    )

}


export default TicketPurchase;
