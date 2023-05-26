const defaultState = {
    CartOrders:[],
    ClickButton:false,
}

const GET_ORDERS = 'GET_ORDERS';

export const ordersReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_ORDERS:
                return {...state,CartOrders:[...state.CartOrders,...action.payload],ClickButton: !state.ClickButton}
        default:
            return state;
    }
}

export const GetOrdersAction = (payload) => ({type:GET_ORDERS,payload})