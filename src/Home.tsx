import { TextInput, View, Text, TouchableWithoutFeedback, Button, ScrollView, KeyboardAvoidingView, StyleSheet, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flexDirection: "row", height: "100%" }}>
                            <ScrollView
                                style={{ borderWidth: 2, width: "0.5%", height: "100%" }}
                                contentContainerStyle={{ justifyContent: "space-around", width: "100%", flexGrow: 1, marginBottom: "5%" }}>
                                <View style={{ paddingTop: "5%" }}>
                                    <Button title='Color' onPress={() => navigation.navigate('Color')} />
                                </View>
                                <View style={{ paddingTop: "5%" }}>
                                    <Button title='Count' onPress={() => navigation.navigate('UseState')} />
                                </View>
                                <View style={{ paddingTop: "5%" }}>
                                    <Button title='ScrollView' onPress={() => navigation.navigate('Scroll')} />
                                </View>
                                <View style={{ paddingTop: "5%" }}>
                                    <Button title='Touchables' onPress={() => navigation.navigate('Touchables')} />
                                </View>
                                <View style={{ paddingTop: "5%" }}>
                                    <Button title='Trail' onPress={() => navigation.navigate('Trail')} />
                                </View>
                                <View>
                                    <Button title='FlatList' onPress={()=>{navigation.navigate('FlatList')}}/>
                                </View>
                                <View>
                                    <Button title='SectionList' onPress={()=>{navigation.navigate('SectionList')}} />
                                </View>
                                <View>
                                    <Button title='Logout' onPress={()=>{navigation.navigate('LoginPage')}}/>
                                </View>
                            </ScrollView>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>This is a Trail Website</Text>

                                <TextInput style={styles.inputStyle} placeholder='Type here'></TextInput>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        color: "black",
        padding: 10,
        width: "100%",
    }
})

export default Home




// const Home = ({ navigation }) => {
//     return (
//         <View style={{ flexDirection: "row", height: "100%" }}>
//             <ScrollView style={{ width: "30%", borderWidth: 2, justifyContent: "space-around" }}>
//                 <Button title='Color' onPress={() => navigation.navigate('Color')} />
//                 <Button title='Count' onPress={() => { navigation.navigate('UseState') }} />
//                 <Button title='ScrollView' onPress={() => { navigation.navigate('Scroll') }} />
//                 <Button title='Touchables' onPress={()=>{navigation.navigate('Touchables')}}/>
//             </ScrollView>
//             {/* <View style={{ width: "30%", borderWidth: 2, justifyContent: "space-around" }}>
//                 <Button title='Color' onPress={() => navigation.navigate('Color')} />
//                 <Button title='Count' onPress={() => { navigation.navigate('UseState') }} />
//                 <Button title='ScrollView' onPress={() => { navigation.navigate('Scroll') }} />
//                 <Button title='Touchables' onPress={()=>{navigation.navigate('Touchables')}}/>
//             </View> */}
//             <View>
//                 <Text>This is a Trail Website</Text>
//             </View>
//         </View>
//     )
// }
// export default Home;