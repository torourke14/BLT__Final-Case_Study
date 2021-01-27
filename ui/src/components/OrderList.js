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
                <div key={order.id} className="">
                    <OrderView value={order} />
                </div>
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