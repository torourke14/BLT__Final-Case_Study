import React from 'react';

const OrderView = (data) => {
    let order = data.value
    return (
        <div>
            <h1>{order.title}</h1>
            <h2>{order.price}</h2>
            <h3>{order.status}</h3>
        </div>
    );
}

export default OrderView;