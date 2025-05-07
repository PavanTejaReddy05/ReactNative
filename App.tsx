import React, { useState } from 'react'
import Color from './src/color'
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import UseState from './src/useState'
import ScrollViewFile from './src/ScrollView'

const App = () => {
  
  return (
    <View style={style.container}>
      <Text>Hello</Text>
      <Color/>
      <UseState></UseState>
      <ScrollViewFile/>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderRadius: 10,
    borderColor: 'blue',
    flex:1,
    backgroundColor:"white"
  }
})

export default App