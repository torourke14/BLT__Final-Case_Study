export function ordersReducer(state = [], action) {
    let {type} = action;

    switch(type) {
        case 'LOAD_ORDERS': {
            let {orders} = action 
            return [...orders]
        }
        default: return state
    }
}