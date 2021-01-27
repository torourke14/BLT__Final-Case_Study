import React, { useState, useEffect } from 'react';
import Header from './Header';
// import * as api from '../../../api'

// import { useDispatch, useSelector } from 'react-redux'

const TicketView = (ticket) => {
    console.log(ticket.value)
    return (
        <div>
            <span>{ticket.value.title}</span>
            <span>{ticket.value.price}</span>
        </div>
    )

}

export default TicketView;