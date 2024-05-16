import { BASE_URL } from "@env"
function StoryApiCalling(text) {
    fetch(`${BASE_URL}/stories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            storiesText: text
        })
    }).then((res) => {
        console.log("RES 1 -----", res);
        res.json().then(
            (data) => console.log("RES 2 -----------", data))
    })
        .catch((err) => console.log(err))
}
export default StoryApiCalling