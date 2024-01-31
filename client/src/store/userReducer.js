import { createAction, createReducer} from "@reduxjs/toolkit";

const defaultState = {
    IsAuth:false,
    User:{},
    active:0
}

export const ChangeIsAuth = createAction('ChangeIsAuth')
export const AddUser = createAction('AddUser')
export const repActive = createAction('repActive')

export default createReducer(defaultState,{
    [ChangeIsAuth]:function(state){
        state.IsAuth = !state.IsAuth
    },
    [AddUser]:function(state,action){
        state.User = action.payload
    },
    [repActive]:function(state){
        state.active = state.active+1
    },
})

