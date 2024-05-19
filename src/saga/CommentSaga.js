import { call, put, takeEvery } from "redux-saga/effects";
import { CommentSliceAction } from "../redux/CommentSlice";
import { BASE_URL } from "@env";

// Define a new action to trigger the API call
function* commentApiCalling(action) {
    try {
        var fetchedData = yield call(() => fetch(`${BASE_URL}/comments`));
        console.log("get 1 ----", fetchedData);
        var fetchedDataConverted = yield fetchedData.json();
        console.log("get 2 ----", fetchedDataConverted);
        yield put({
            type: CommentSliceAction.addToCommentReducerArray.type,
            payload: fetchedDataConverted
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

function* commentDataPOST(action) {
    try {
        const postData = yield call(() =>
            fetch(`${BASE_URL}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    commentText: action.payload
                })
            })
        );
        const postDataConverted = yield postData.json();
        console.log(postDataConverted);

        // Optionally, you can dispatch an action to update the state with the new comment
        // yield put({
        //     type: CommentSliceAction.addComment.type,
        //     payload: postDataConverted
        // });
    } catch (error) {
        console.error("Error posting comment:", error);
    }
}


function* CommentSaga() {
    yield takeEvery(CommentSliceAction.fetchCommentData, commentApiCalling);
    yield takeEvery(CommentSliceAction.postNewCommentData, commentDataPOST)
}

export default CommentSaga;
