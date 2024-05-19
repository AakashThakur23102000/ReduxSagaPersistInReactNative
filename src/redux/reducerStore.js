import CommentSaga from "../saga/CommentSaga";
import StorySaga from "../saga/StorySaga";
import StorySlice from "./StorySlice";
import createSageMiddleware from "redux-saga"

const { configureStore } = require("@reduxjs/toolkit");
const { default: CommentSlice } = require("./CommentSlice");
const sagaMiddleware = createSageMiddleware();

var reducerStore = configureStore({
    reducer: {
        CommentSlice: CommentSlice.reducer,
        StorySlice: StorySlice.reducer
    },
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(StorySaga);
sagaMiddleware.run(CommentSaga);
export default reducerStore