import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommentSliceAction } from './src/redux/CommentSlice'
import { StorySliceAction } from './src/redux/StorySlice'
import DemoGenerator from './src/Generator Demo  Function/DemoGenerator'
import { horizontalScale, verticalScale, scaleFontSize } from "./src/ResponsiveScaling/CustomResponsiveScaling"
import useBubbleSortOptimized from './src/UsefulHooks/useBubbleSortOptimized'

const App = () => {
  var array = ["a","bd","asa","dwdw"];
  console.log(array)
  array = useBubbleSortOptimized(array);
  console.log("new -", array);
  var [feilds, setFeilds] = useState({
    comment: "",
    story: ""
  });

  // redux data 
  const dispatch = useDispatch();
  const commentStoreData = useSelector(state => state.CommentSlice.data);
  const storyStoreData = useSelector(state => state.StorySlice.data);
  console.log("store comment ---- ", commentStoreData)
  console.log("store story ---- ", storyStoreData)


  // useEffect(()=>{
  //   DemoGenerator()
  // },[])

  return (
    <View style={styles.container} >
      <View style={styles.innerContainer}>
        <View style={{ gap: 20, }}>
          <View>
            {console.log("-----------DOM REDNDERD--------")}
            <TextInput
              style={styles.mainTextInput}
              placeholder='Enter your comment'
              value={feilds.comment}
              onChangeText={(text) => setFeilds({ ...feilds, comment: text })}
            />
            <Button
              onPress={() => dispatch(CommentSliceAction.postNewCommentData(feilds.comment))}
              style={styles.mainButton}
              title='Press to Submit Comment' />
            <Button
              style={styles.mainButton}
              onPress={() => dispatch(CommentSliceAction.fetchCommentData())}
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
              onPress={() => dispatch(StorySliceAction.postNewStoryData(feilds.story))}
              title='Press to Submit story' />
            <Button
              style={styles.mainButton}
              onPress={() => dispatch(StorySliceAction.fetchStoryData())}
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
    paddingTop: verticalScale(25)
  },
  innerContainer: {
    flex: 1,
  },
  mainTextInput: {
    height: verticalScale(30),
    borderRadius: horizontalScale(5),
    padding: 0,
    paddingHorizontal: horizontalScale(10),
    backgroundColor: "grey",
    width: "80%",
    alignSelf: "center"
  },
  mainButton: {
    width: 50
  }
})

export default App