import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { Banner } from 'react-native-paper'
import Constants from 'expo-constants'

import Header from './components/Header'
import Task from './components/Task'
import TodoInput from './components/TodoInput'
import AddTodo from './components/AddTodo'

export default function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [visible, setVisible] = useState(true)

  function newTodo() {
    if (input.length < 3) {
      Alert.alert(
        "Todo less than 3 words",
        "Todo must be bigger than 3 words",
        [
          {
            text: 'Ok',
            onPress: () => setInput('')
          }
        ]
      )
    } else {
      setTasks([...tasks, input])
      setInput('')
    }
  }

  function finishedTodo(index) {
    let newTodos = [...tasks]
    newTodos.splice(index, 1)
    setTasks(newTodos)
  }

  return (
    <View style={styles.container}>
      <Banner visible={visible} actions={[{ label: 'Ok', onPress: () => setVisible(false) }]}>
        Type in the input box and press 'ADD TODO' to make a new todo. Once the todo is finished, just tap on it to remove it.
      </Banner>
      <Header />
      <View style={styles.inputs}>
        <TodoInput
          placeholder='Enter Todos...'
          value={input}
          onChangeText={(val) => setInput(val)}
        />
        <AddTodo
          onPress={newTodo}
        />
      </View>
      <View style={styles.todoContainer}>
        <ScrollView>
          {
            tasks.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => finishedTodo(index)}>
                  <Task item={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  todoContainer: {
    flex: 1,
    marginTop: 12
  },
  inputs: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

