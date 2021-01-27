import React from 'react';

const OrderView = (ticket) => {
    return (
        <div>
            <h1>{ticket.value.title}</h1>
            <h2>{ticket.value.price}</h2>
        </div>
    );
}

export default OrderView;