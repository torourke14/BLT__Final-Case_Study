import React, {useEffect} from 'react';
import OrderView from './OrderView';
import { useSelector, useDispatch } from 'react-redux'

function OrderList(props) {
    const orders = [
        {
            title: 'bball', price: 40,
        },
        {
            title: 'concert', price: 69,
        }
    ]

    // Match the .orders to whats defined in rootReducer
    // useSelector is what grabs the state
    const reduxOrders = useSelector(state => state.orders)
    console.log("redux: ", reduxOrders)
    const dispatch = useDispatch() 
    // useEffect will trigger onMount. you dispatch the type: (which action to take within switch of reducer)
    //                                 you also pass the data -> orders, ensure in reducer, the name of the data
    //                                 being passed through matches. const {orders} = action
    useEffect(() => {
        // dispatch is what updates the state
        dispatch({type: 'LOAD_ORDERS', orders})
    }, [])

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