import { View, Text, TouchableHighlight, Alert, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const Touchables = () => {
    const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={{alignItems:"center"}}>
        <TouchableHighlight 
        onPress={()=>{Alert.alert("Touchable Highlight got clicked.")}} 
        underlayColor="red"
        onShowUnderlay={() => setIsPressed(true)}
        onHideUnderlay={() => setIsPressed(false)}>
            <View style={{padding:10, margin:15}}>
                <Text style={{
            fontSize: isPressed ? 24 : 16,
            fontWeight: isPressed ? 'bold' : 'normal',
            color: isPressed ? 'white' : 'black',
          }}>Touchable Highlight</Text>
            </View>
        </TouchableHighlight>
        

        <TouchableOpacity onPress={()=>{Alert.alert("Touchable Opacity got clicked")}}>
            <View>
                <Text>Touchable Opacity</Text>
            </View>
        </TouchableOpacity>

        <TouchableNativeFeedback onPress={()=>{Alert.alert("Touchable Native Feedback got clicked.")}} background={TouchableNativeFeedback.Ripple("grey",false)}>
            <View style={{padding:10, margin:15}}>
                <Text>Touchable Native Feedback</Text>
            </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={()=>{Alert.alert("Touchable Without Feedback got clicked")}}>
            <View >
                <Text>Touchable Without Feedback</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
  )
}

export default Touchables