const { createSlice } = require("@reduxjs/toolkit");

const StorySlice = createSlice({
    name:"StorySlice",
    initialState:{
        data:[]
    },
    reducers:{
        addToStoryReducerArray:(state,action)=>{
            state.data = action.payload;
        },
        deleteAllStoryReducerArray:(state,action)=>{
            state.data = [];
        }
    }

})
export const StorySliceAction = StorySlice.actions;
export default StorySlice;