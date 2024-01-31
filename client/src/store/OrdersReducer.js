const defaultState = {
    Orders:[],
    ClickButton:false,
}

const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = "ADD_ORDER";

export const ordersReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_ORDERS:
                return {...state,Orders:action.payload}
        case ADD_ORDER:
                return {...state,ClickButton:!state.ClickButton}
        default:
            return state;
    }
}

export const GetOrdersAction = (payload) => ({type:GET_ORDERS,payload})
export const AddOrderAction = () => ({type:ADD_ORDER})