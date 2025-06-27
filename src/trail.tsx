import { View, Text, TextInput, Image, SectionList, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const DATA = [
    { title: 'A', data: ['Alice', 'Andrew'] },
    { title: 'B', data: ['Bob', 'Bella'] },
];
const Trail = () => {
    const fruits = ["Apple", "Banana", "Orange"];
    const [name,setName]=useState('')
    const [nameList,setNameList]=useState<String[]>([])
    const displayName=()=>{
        if(name.trim()!==''){
            setNameList([...nameList,name]);
            setName('');
        }else{
            Alert.alert("Input Cannot be Empty")
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView >
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" ,alignItems: "baseline" }}>
                        <Text>Name:</Text>
                        <TextInput placeholder='Type your name' placeholderTextColor="black" value={name} onChangeText={setName} style={{ color: "black",borderWidth: 2 }}></TextInput>
                    </View>
                    <View>
                        {nameList.map((name,index)=>(
                            <Text>{name}</Text>
                        ))}
                    </View>
                    <Button title='Submit' onPress={()=>{displayName()}}/>
                </View>
                <Image testID='LocalImage' source={require('./assets/images/images.jpeg')} />
                <Image source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' }} />
                <View style={{flexDirection:"row"}}>
                    {fruits.map((val, index) => (
                        <Text style={{padding:5}}>{val}</Text>
                    ))}
                </View>
                
                {/* <SectionList
                    sections={DATA}
                    renderItem={({item})=>(
                        <View><Text>{item}</Text></View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <View>
                            <Text>{section.title}</Text>
                            {section.data.map((item,index)=>(
                                <Text>{item}</Text>
                            ))}
                        </View>
                    )} /> */}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Trail;