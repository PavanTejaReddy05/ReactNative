import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const submitFunc = () => {
        if (!name || !Password) {
            Alert.alert("Error", "Please enter both username and password.");
            return;
        } else {
            setName(name)
            setPassword(Password)
            Alert.alert(name, Password)
            navigation.navigate('HomePage')
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaProvider style={Styles.SafeAreaProvider}>
                <SafeAreaView style={Styles.SafeAreaView}>
                    <View>
                        <View style={Styles.credentials}>
                            <Text>UserName:</Text>
                            <TextInput style={Styles.ipt} value={name} onChangeText={setName} placeholderTextColor="grey" placeholder='Username' />
                        </View>
                        <View style={Styles.credentials}>
                            <Text>Password:</Text>
                            <TextInput secureTextEntry style={Styles.ipt} value={Password} onChangeText={setPassword} placeholderTextColor="grey" placeholder='Password' />
                        </View>
                        <TouchableOpacity>
                            <Button title="Submit" onPress={() => { submitFunc() }} />
                        </TouchableOpacity>
                        <View style={{ marginTop: "10%" }}>
                            <Text onPress={() => { navigation.navigate('RegistrationPage') }}>New User...?</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </TouchableWithoutFeedback>
    )
}
const Styles = StyleSheet.create({
    SafeAreaProvider: {
        justifyContent: "center",
        alignItems: "center",
    },
    SafeAreaView: {
        backgroundColor: "#ffff",
        width: "80%",
        borderWidth: 3,
        height: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    ipt: {
        borderWidth: 2,
        width: "70%",
        color: "black"
    },
    credentials: {
        justifyContent: "space-between",
        width: "80%",
        marginBottom: "5%",
        alignItems: "baseline",
        flexDirection: "row"
    },
    btn: {
        marginBottom: "10%"
    }
}
)

export default LoginPage