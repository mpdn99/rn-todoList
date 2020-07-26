import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {TODOS} from '../data/data'
import TodoItem from '../components/TodoItem'



const AllScreen = (props) => {
    const [todoList, setTodoList] = useState(TODOS);
    const [todoBody, setTodoBody] = useState('');

    const onToggleTodo = id => {
        const todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        const newTodoList = [...todoList];
        setTodoList(newTodoList);
        setTimeout(() => {
            props.navigation.navigate('SingleTodo', {
              updatedTodo: todo
            });
          }, 1000);
    };

    const onDeleteTodo = id => {
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
      };

    const onSubmitTodo = () => {
        const newTodo = {
            body: todoBody,
            status: 'Active',
            id: todoList.length + 1
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setTodoBody('');
    };

    return(
        <ImageBackground style={styles.container} source={{ uri: 'https://free4kwallpapers.com/uploads/originals/2019/12/05/eclipse-from-space-wallpaper.jpg' }}>
            <KeyboardAvoidingView
                enabled
                behavior="padding"
            >
                <ScrollView style={styles.scrollView}>
                    <View style={{ marginTop: "10%", marginBottom: '200%' }}>
                        {todoList.map((todo, idx) => {
                            return (
                                <TodoItem
                                    idx={idx}
                                    todo={todo}
                                    key={todo.body}
                                    onToggleTodo={onToggleTodo}
                                    onDeleteTodo={onDeleteTodo}
                                />
                            );
                        })}
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={todoBody}
                                style={styles.todoInput}
                                onChangeText={text => setTodoBody(text)}
                            />
                            <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    todoInput: {
        width: '95%',
        minHeight: 30,
        color: 'white',
        borderWidth: 1,
        marginTop: '20%',
        marginBottom: '5%',
        borderColor: 'grey'
    },
    inputContainer: {
        flex: 1,
        width: '90%',
        marginTop: 20,
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
        paddingTop: 10
    }
});

export default AllScreen;