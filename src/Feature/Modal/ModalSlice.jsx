import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    isOpen: false,

}
const modalSlice= createSlice({
    name:"modal",
    initialState,
    reducers:{
        handleModal: (state)=>{
            console.log('gee',state)
            state.isOpen= !state.isOpen;
        }
    }
})

export default modalSlice.reducer
export const {handleModal}=modalSlice.actions;