import React from 'react';
import OrderView from './OrderView';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderList(props) {
    const orders =     
        [
            {id: 1, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
            {id: 2, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
            {id: 3, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
            {id: 4, title: 'rap concert', price: 40, userId: 'user2', status: 'Awaiting Payment'},
            {id: 5, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
            {id: 6, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
            {id: 7, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
            {id: 8, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
            {id: 9, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
            {id: 10, title: 'rap concert', price: 40, userId: 'user2', status: 'Awaiting Payment'},
            {id: 11, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
            {id: 12, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
            {id: 13, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
            {id: 14, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
            {id: 15, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
            {id: 16, title: 'rap concert', price: 40, userId: 'user2', status: 'Awaiting Payment'},
            {id: 17, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
            {id: 18, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
            {id: 19, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
            {id: 20, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
            {id: 21, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
            {id: 22, title: 'rap concert', price: 40, userId: 'user2', status: 'Awaiting Payment'},
            {id: 23, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
            {id: 24, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'}
        ]

    const renderOrders = () => {
        return orders.map((order) => {
            return (
                <div>
                <li className="list-group-item" key={order.id}>
                    <OrderView value={order} />
                </li>
                
                </div>
            )
        })
    }

    return (
        <div>
        <h1> My Orders </h1>
        <ul className="list-group">
            {renderOrders()}
        </ul>
        </div>
        
    );
}

export default OrderList;