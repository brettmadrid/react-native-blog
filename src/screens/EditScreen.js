import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  // Connect to Context store
  const { state, editBlogPost } = useContext(Context)
  // Grab id passed in with navigation object
  const id = navigation.getParam('id')
  // with the id, find the blogpost object to edit
  const blogPost = state.find(blogPost => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop())
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
