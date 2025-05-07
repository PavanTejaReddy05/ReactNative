import { Text, View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const ScrollViewFile = () => {
  return (
    <ScrollView>
      {Array.from({ length: 20 }).map((_, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#d1e7dd',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default ScrollViewFile