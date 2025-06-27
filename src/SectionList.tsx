import { View, Text, SectionList } from 'react-native'
import React from 'react'


const DATA = [
    {
        title: 'Fruits',
        data: ['Apple', 'Banana', 'Orange'],
    },
    {
        title: 'Vegetables',
        data: ['Carrot', 'Tomato', 'Potato'],
    },
];

const SectionListComponent = () => {
    return (
        <View>
            <View>
                <Text>
                    {JSON.stringify(DATA,null,4)}
                </Text>
            </View>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => (
                    <View><Text>{item}</Text></View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{ borderWidth: 2 }}><Text>{title}</Text></View>
                )} />
        </View>
    )
}

export default SectionListComponent