import React, { useState, useEffect } from 'react';
import Header from './Header';

// import * as api from '../../../api'


// import { useDispatch, useSelector } from 'react-redux'

const TicketPurchase = (ticket) => {

    const renderBuyBtn = () => {
        if (ticket.available){
            return (
                <button>Purchase</button>
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
