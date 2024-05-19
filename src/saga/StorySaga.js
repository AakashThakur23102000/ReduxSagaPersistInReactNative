import { call, put, takeEvery } from "redux-saga/effects";
import { BASE_URL } from "@env";
import { StorySliceAction } from "../redux/StorySlice";
function* StoryApiCalling() {
    try {
        var fetchedData = yield call(() => fetch(`${BASE_URL}/stories`));
        console.log("get 1 ----" , fetchedData);
        var fetchedDataConverted = yield fetchedData.json();
        console.log("get 2 ----" , fetchedDataConverted);
        yield put({
            type: StorySliceAction.addToStoryReducerArray.type,
            payload: fetchedDataConverted
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

function* storyDataPOST(action) {
    try {
        const postData = yield call(() =>
            fetch(`${BASE_URL}/stories`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    storiesText: action.payload
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
function* StorySaga() {
    yield takeEvery(StorySliceAction.fetchStoryData, StoryApiCalling);
    yield takeEvery(StorySliceAction.postNewStoryData, storyDataPOST);
}

export default StorySaga