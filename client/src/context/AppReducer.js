// using reducer we specify the application state changes in response to certain actions to our store / context and send it down to the application

export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state, // our current state
                transactions : state.transactions.filter(trans => trans.id !== action.payload) // filtering out the id passed and sending the rest of the transactions to the state
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions : [action.payload, ...state.transactions]
            }
        default : 
            return state;
    }
}