const { createSlice } = require("@reduxjs/toolkit");

const CommentSlice = createSlice({
    name:"CommentSlice",
    initialState:{
        data:[]
    },
    reducers:{
        fetchCommentData:(state,action)=>{
            console.log("Fetching Comment Data ---****")
        },
        postNewCommentData:()=>{
            console.log("POST - Comment")
        },
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