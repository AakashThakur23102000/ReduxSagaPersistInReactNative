import CommentSaga from "../saga/CommentSaga";
import StorySaga from "../saga/StorySaga";
import StorySlice from "./StorySlice";
import createSageMiddleware from "redux-saga"

const { configureStore } = require("@reduxjs/toolkit");
const { default: CommentSlice } = require("./CommentSlice");
// saga
const sagaMiddleware = createSageMiddleware();

// persisit
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


var persistConfig = {
    key: "persistData",
    storage: AsyncStorage
}
var rootReducer = combineReducers({
    CommentSlice: CommentSlice.reducer,
    StorySlice: StorySlice.reducer
})
var persistedReducer = persistReducer(persistConfig, rootReducer);


// Persist configuration for slective feild
// const commentPersistConfig = {
//     key: "comment",
//     storage: AsyncStorage,
// };
// const storyPersistConfig = {
//     key: "story",
//     storage: AsyncStorage,
// };
// var persistedCommentSliceReducer = persistReducer(commentPersistConfig, CommentSlice.reducer);
// var persistedStorySliceReducer = persistReducer(storyPersistConfig, StorySlice.reducer);


// main 
var reducerStore = configureStore({
    // reducer: {
    //     CommentSlice: CommentSlice.reducer,
    //     StorySlice: StorySlice.reducer
    // },

    // normal full persist
    reducer: persistedReducer,

    // for slective feild
    // reducer:{
    //     //   here to make only story slice to persisit
    //     CommentSlice:persistedCommentSliceReducer,
    //     StorySlice:persistedStorySliceReducer
    // },
    middleware: () => [sagaMiddleware]
})
sagaMiddleware.run(StorySaga);
sagaMiddleware.run(CommentSaga);
export default reducerStore