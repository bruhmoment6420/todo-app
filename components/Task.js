import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'aquamarine',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    textShadowRadius: 2
  },
  todoText: {
    fontSize: 20,
  }
})