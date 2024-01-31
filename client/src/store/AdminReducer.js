import { createAction,createReducer } from "@reduxjs/toolkit";

const defaultState = {
    ModalOpen:false,
    IsAdmin:false
}

export const ChangeModalOpen = createAction("ChangeModalOpen")
export const ChangeIsAdmin = createAction("ChangeIsAdmin")

export default createReducer(defaultState,{
    [ChangeModalOpen]:function(state){
        state.ModalOpen = !state.ModalOpen
    },
    [ChangeIsAdmin]:function(state){
        state.IsAdmin = !state.IsAdmin
    }
})