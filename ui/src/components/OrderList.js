import React from 'react';
import OrderView from './OrderView';

function OrderList(props) {
    const orders = [
        {
            title: 'bball', price: 40,
        },
        {
            title: 'concert', price: 69,
        }
    ]

    const renderOrders = () => {
        return orders.map((order) => {
            return (
                <li key={order.id} className="">
                    <OrderView value={order} />
                </li>
            )
        })
    }

    return (
        <div>
            <div className="list-group">
                {renderOrders()}
            </div>
        </div>
    );
}

export default OrderList;