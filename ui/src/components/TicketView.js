import React, { useState, useEffect } from 'react';
import Header from './Header';
// import * as api from '../../../api'

// import { useDispatch, useSelector } from 'react-redux'

const TicketView = (ticket) => {
    return (
        <div>
            <h1>{ticket.value.title}</h1>
            <p>{ticket.value.price}</p>
        </div>
    )
}

export default TicketView;