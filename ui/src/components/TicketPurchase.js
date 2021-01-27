import React, { useState, useEffect } from 'react';
import Header from './Header';

// import * as api from '../../../api'


// import { useDispatch, useSelector } from 'react-redux'

const TicketPurchase = (/*ticket*/) => { //THIS SHOULD TAKE A TICKET AS INPUT 
    const ticket = {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true}
    const renderBuyBtn = () => {
        if (ticket.available){
            return (
                <div>
                    <p> Status - Available</p>
                    <button>Purchase</button>
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
            <h1>{ticket.title}</h1>
            <h2>{ticket.price}</h2>
            <span>{renderBuyBtn()}</span>
        </div>

    )

}


export default TicketPurchase;
