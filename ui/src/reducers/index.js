import { ordersReducer } from './orders'
import { ticketsReducer } from './tickets'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    orders: ordersReducer,
    tickets: ticketsReducer,
})

export default rootReducer