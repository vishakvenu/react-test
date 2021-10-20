const initialState={
    amount:123
}

const accountreducer=(state=initialState,action)=>{
    switch(action.type){
        case "deposit":
            return {...state,amount:state.amount+action.payload}
            case "withdraw":
                return {...state,amount:state.amount-action.payload}    
        default:
            return state;
    }
}

export default accountreducer;