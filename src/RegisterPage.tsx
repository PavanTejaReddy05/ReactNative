import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const submitFunc = () => {
        setName(name)
        setPassword(Password)
        Alert.alert(name, Password)
        navigation.navigate('LoginPage')
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaProvider style={Styles.SafeAreaProvider}>
                <SafeAreaView style={Styles.SafeAreaView}>
                    <View>
                        <View style={Styles.credentials}>
                            <Text>UserName:</Text>
                            <TextInput
                                style={Styles.ipt}
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor="grey"
                                placeholder='Username'
                            />
                        </View>
                        <View style={Styles.credentials}>
                            <Text>Password:</Text>
                            <TextInput
                                secureTextEntry
                                style={Styles.ipt}
                                value={Password}
                                onChangeText={setPassword}
                                placeholderTextColor="grey"
                                placeholder='Password'
                            />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
                            <View style={{ width: "45%" }}>
                                <Text>Date of Birth:</Text>
                                <TextInput
                                    placeholder="YYYY-MM-DD"
                                    placeholderTextColor="grey"
                                    style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}
                                    value={dob}
                                    onChangeText={setDob}
                                />
                            </View>
                            <View style={{ width: "45%" }}>
                                <Text>Phone Number:</Text>
                                <TextInput
                                    placeholder="+91"
                                    placeholderTextColor="grey"
                                    style={{ borderWidth: 1, padding: 10, borderRadius: 5, width: "100%" }}
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                />
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Button title="Submit" onPress={() => { submitFunc() }} />
                        </TouchableOpacity>
                        <View style={{ marginTop: "10%" }}>
                            <Text onPress={() => { navigation.navigate('LoginPage') }}>Already having an Account...?</Text>
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
        borderWidth: 1,
        width: "70%",
        color: "black",
        borderRadius: 5
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