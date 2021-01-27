import React, { useEffect, useState } from 'react';
import TicketView from './TicketView';
import Header from './Header';

// import { useSelector,useDispatch } from 'react-redux'

// import * as api from '../../api'
const TicketList = () => {

    const tickets = [
        {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf', available: true},
        {title: 'concert', price: 50, userId: 'asdf', orderId: 'asdf', available: false},
        ]
 

    const renderTickets = () => {
        return tickets.map((ticket) => {
            return (
                <li key={ticket.id} className="">
                    <TicketView value={ticket} />
                </li>
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
