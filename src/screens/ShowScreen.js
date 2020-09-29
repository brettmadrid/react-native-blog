import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  // get state
  const { state } = useContext(Context)
  // get id param sent through navigation.getParam object
  const id = navigation.getParam('id')

  const blogPost = state.find(blogPost => blogPost.id === id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          // route to 'Edit' screen and pass in the id of blog to edit
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name='pencil' size={35} color='black' />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({})

export default ShowScreen
