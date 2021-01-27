import React, { useState, useEffect } from 'react';
import Review from '../review'
import ReviewForm from '../review-form-v2';
import Header from './Header';

import * as api from '../../api'

import { useDispatch, useSelector } from 'react-redux'

const TicketPurchase = ({value: ticket}) => {

    const renderBuyBtn = () => {
        if (ticket.status == "Available"){
            return (
                <button>Purchase</button>
            )
        }
    }
    return (
        <div>
            <h1>{ticket.title}</h1>
            <h2>{ticket.price}</h2>
            <h3>Status: {ticket.status}</h3>
            <span>{renderBuyBtn()}</span>
        </div>

    )

}


export default TicketPurchase;
