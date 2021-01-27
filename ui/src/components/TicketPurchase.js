import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import PaymentModal from './PaymentModal';

// import * as api from '../../../api'


// import { useDispatch, useSelector } from 'react-redux'

const TicketPurchase = (/*ticket*/) => { //THIS SHOULD TAKE A TICKET AS INPUT 
    const ticket = {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: false}
    const renderBuyBtn = () => {
        if (ticket.available){
            return (
                <div>
                    <PaymentModal/>
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
            {renderBuyBtn()}
        </div>

    )

}


export default TicketPurchase;
