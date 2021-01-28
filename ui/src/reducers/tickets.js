export function ticketsReducer(state = [], action) {
    let {type} = action;

    switch(type) {
        case 'LOAD_TICKETS': {
            let {items} = action 
            return [...items]
        }
        default: return state
    }
}