import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommentApiCalling from './src/CommentApiCalling'
import StoryApiCalling from './src/StoryApiCalling'
import { BASE_URL } from "@env"
import { useDispatch, useSelector } from 'react-redux'
import { CommentSliceAction } from './src/redux/CommentSlice'
import { StorySliceAction } from './src/redux/StorySlice'

const App = () => {

  var [feilds, setFeilds] = useState({
    comment: "",
    story: ""
  });
  var [commentDataArr, setCommentDataArr] = useState([]);
  var [storiesDataArr, setStoriesDataArr] = useState([]);

  // redux data 
  const dispatch = useDispatch();
  const commentStoreData = useSelector(state => state.CommentSlice.data);
  const storyStoreData = useSelector(state => state.StorySlice.data);
  console.log("store comment ---- ", commentStoreData)
  console.log("store story ---- ", storyStoreData)

  // data fetching functions
  function FetchCommentData() {
    fetch(`${BASE_URL}/comments`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      res.json().then(
        (data) => {
          dispatch(CommentSliceAction.addToCommentReducerArray(data))
        })
    })
      .catch((err) => console.log(err))
  }
  function FetchStoriesData() {
    fetch(`${BASE_URL}/stories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      res.json().then(
        (data) => {
          dispatch(StorySliceAction.addToStoryReducerArray(data))
        })
    })
      .catch((err) => console.log(err))
  }


  return (
    <View style={styles.container} >
      {console.log("DOM is updating")}
      <View style={styles.innerContainer}>
        <View style={{ gap: 20, }}>
          <View>
            <TextInput
              style={styles.mainTextInput}
              placeholder='Enter your comment'
              value={feilds.comment}
              onChangeText={(text) => setFeilds({ ...feilds, comment: text })}
            />
            <Button
              onPress={() => CommentApiCalling(feilds.comment)}
              style={styles.mainButton}
              title='Press to Submit Comment' />
            <Button
              style={styles.mainButton}
              onPress={() => FetchCommentData()}
              title='Fetch story' />
          </View>

          <View>
            <TextInput
              style={styles.mainTextInput}
              placeholder='Enter your story'
              value={feilds.story}
              onChangeText={(text) => setFeilds({ ...feilds, story: text })}
            />
            <Button
              style={styles.mainButton}
              onPress={() => StoryApiCalling(feilds.story)}
              title='Press to Submit story' />
            <Button
              style={styles.mainButton}
              onPress={() => FetchStoriesData()}
              title='Fetch story' />
          </View>
        </View>
        <ScrollView
          style={{ backgroundColor: "red" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {commentStoreData?.map((item, index) => {
            return (
              <Text key={index}>{item.commentText}</Text>
            )
          })}
        </ScrollView>
        <ScrollView
          style={{ backgroundColor: "yellow" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {storyStoreData?.map((item, index) => {
            return (
              <Text key={index}>{item.storiesText}</Text>
            )
          })}

        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25
  },
  innerContainer: {
    flex: 1,
  },
  mainTextInput: {
    height: 30,
    borderRadius: 5,
    padding: 0,
    paddingHorizontal: 10,
    backgroundColor: "grey",
    width: "80%",
    alignSelf: "center"
  },
  mainButton: {
    width: 50
  }
})

export default App