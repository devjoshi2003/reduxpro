import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name:'Dev Joshi',
    cnt:0,
  },
  reducers: {
    btn:(state,action)=>{
        // console.log(action.payload)
        state.name= action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { btn } = counterSlice.actions

export default counterSlice.reducer