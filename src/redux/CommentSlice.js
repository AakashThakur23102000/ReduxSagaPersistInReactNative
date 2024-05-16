const { createSlice } = require("@reduxjs/toolkit");

const CommentSlice = createSlice({
    name:"CommentSlice",
    initialState:{
        data:[]
    },
    reducers:{
        addToCommentReducerArray:(state,action)=>{
            state.data = action.payload;
        },
        deleteAllCommentReducerArray:(state,action)=>{
            state.data = [];
        }
    }

})
export const CommentSliceAction = CommentSlice.actions;
export default CommentSlice;