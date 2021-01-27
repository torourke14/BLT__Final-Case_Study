import React, { useState, useEffect } from 'react';
import Header from './Header';
// import * as api from '../../../api'

// import { useDispatch, useSelector } from 'react-redux'

const TicketView = (ticket) => {
    console.log(ticket.value)
    return (
        <div>
            <p>{ticket.value.title}</p>
            <p>{ticket.value.price}</p>
        </div>
    )

}

export default TicketView;