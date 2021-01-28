import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const OrderView = (data) => {
    let order = data.value
    return (
        <div>
            <p> <b> {order.title} </b> - ${order.price} - {order.status} </p>
        </div>
    );
}

export default OrderView;