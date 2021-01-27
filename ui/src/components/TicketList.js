import React, { useEffect, useState } from 'react';
import TicketView from './TicketView';
import Header from './Header';

import { useSelector,useDispatch } from 'react-redux'

import * as api from '../../api'
const TicketList = () => {

    const tickets = useSelector(state => state.tickets)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(api.getTickets())
    }, [])

    const renderTickets = () => {
        return items.map((ticket) => {
            return (
                <div key={ticket.id} className="">
                    <TicketView value={ticket} />
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
