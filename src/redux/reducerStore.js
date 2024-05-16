import StorySlice from "./StorySlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: CommentSlice } = require("./CommentSlice");

var reducerStore = configureStore({
    reducer:{
        CommentSlice:CommentSlice.reducer,
        StorySlice:StorySlice.reducer
    }
})

export default reducerStore