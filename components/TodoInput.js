import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function TodoInput({ placeholder, value, onChangeText, onSubmitEditing }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor='black'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginLeft: 10, 
    marginRight: 10,
    marginTop: 12,
    borderRadius: 10,
  }
})