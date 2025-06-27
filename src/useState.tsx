import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    const inc = () => {
        setCount(count + 1)
    }
    const dcrmt = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }
    return (
        <View style={style.view}>
            <Button title='+' onPress={inc} />
            <Text>{count}</Text>
            <Button title='-' onPress={dcrmt} />
        </View>
    )
}
const style = StyleSheet.create({
<<<<<<< HEAD
    view: {
=======
    view1: {
>>>>>>> 99fc50a (Topics covered in React Native)
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        backgroundColor: "white", 
<<<<<<< HEAD
        width: "30%",
        margin: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center"
    },
=======
        height:"90%",
        margin: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    view2:{
        borderWidth:2,
        flexDirection:"row",
        width:"50%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
>>>>>>> 99fc50a (Topics covered in React Native)
    button: {
        width: 5
    }
})
export default UseState