import { BASE_URL } from "@env"
function CommentApiCalling(text) {
    fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            commentText: text
        })
    }).then((res) => {
        console.log("RES 1 -----", res);
        res.json().then(
            (data) => console.log("RES 2 -----------", data))
    })
        .catch((err) => console.log(err))
}
export default CommentApiCalling;