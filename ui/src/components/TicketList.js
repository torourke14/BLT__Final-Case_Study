import React, { useEffect, useState } from 'react';
import TicketView from './TicketView';
import Header from './Header';

// import { useSelector,useDispatch } from 'react-redux'

// import * as api from '../../api'
const TicketList = () => {

    const tickets = [
        {title: 'bball', price: 40, userId: 'asdf', orderId: 'asdf'},
        {title: 'concert', price: 50, userId: 'asdf', orderId: 'asdf'},
        ]
    // const dispatch = useDispatch();

    // useEffect(() => {
    //  whatever code gets teh dispatch data
    // }, [])

    const renderTickets = () => {
        return tickets.map((ticket) => {
            return (
                <div key={ticket.id} className="">
                    <TicketView value={ticket} />
                </div>
            )
        })
    }

    return (
        <div>
            <Header />
            <div className="list-group">
                {renderTickets()}
            </div>
        </div>
    );
};

export default TicketList;
