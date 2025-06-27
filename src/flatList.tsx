import { View, Text, FlatList } from 'react-native'
import React from 'react'


const dataList=[
    {Name:"Pavan", Age:23},
    {Name:"Sai Teja", Age:22},
    {Name:"Lokesh", Age:21},
    {Name:"Leela", Age:23},
    {Name:"Pavan", Age:23},
    {Name:"Sai Teja", Age:22},
    {Name:"Lokesh", Age:21},
    {Name:"Leela", Age:23},
    {Name:"Pavan", Age:23},
    {Name:"Sai Teja", Age:22},
    {Name:"Lokesh", Age:21},
    {Name:"Leela", Age:23},
    {Name:"Pavan", Age:23},
    {Name:"Sai Teja", Age:22},
    {Name:"Lokesh", Age:21},
    {Name:"Leela", Age:23},
]

const FlatListComponent = () => {
    const renderItem=({item}:{item:{Name:string, Age:number}})=>(
        <View style={{borderWidth:2, flexDirection:"row", padding:10}}>
            <Text style={{backgroundColor:"#B5FCCD", width:"100%", borderRadius:5, textAlign:"center", textAlignVertical:"center", height:50}}>{item.Name},{item.Age}</Text>
        </View>
    )
  return (
    <View style={{padding:10}}>
        <FlatList data={dataList} renderItem={renderItem} />
    </View>
  )
}

export default FlatListComponent;