import { createAction, createReducer} from "@reduxjs/toolkit";

const defaultState = {
    IsAuth:true,
    User:{}
}

export const ChangeIsAuth = createAction('ChangeIsAuth')
export const AddUser = createAction('AddUser')

export default createReducer(defaultState,{
    [ChangeIsAuth]:function(state){
        state.IsAuth = !state.IsAuth
    },
    [AddUser]:function(state,action){
        state.User = action.payload
    }
})

