import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Color = () => {
  return (
    <View style={style.container}>
          <Text style={{ color: "black" }}>App</Text>
          <Text style={style.red}>Red</Text>
          <Text style={style.blue}>Blue</Text>
          <Text style={[style.red,style.blue]}>Red then Blue</Text>
          <Text style={[style.blue,style.red]}>Blue then red</Text>
        </View>
  )
}
const style = StyleSheet.create({
    container:{
        width:"50%",
        backgroundColor:"white",
        // borderColor:"black",
        borderWidth:1
    },
    red: {
      color: "red",
      fontWeight:"700",
      fontSize: 20,
    },
    blue:{
      color:"blue",
      fontWeight:"700",
      fontSize:30
    }
  })
  

export default Color