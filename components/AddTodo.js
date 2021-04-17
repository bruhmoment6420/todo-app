import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddTodo({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text>ADD TODO</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 100,
    marginTop: 12
  }
})