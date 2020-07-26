import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const TodoItem = props => {
    const statusStyle = {
        backgroundColor: props.todo.status === 'Done' ? 'blue' : 'gray'
    };

    const onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
                },
                { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
            ],
            { cancelable: true }
        );
    };

    return (
        <TouchableOpacity
            key={props.todo.body}
            style={[styles.todoItem, statusStyle]}
            onPress={() => props.onToggleTodo(props.todo.id)}
            onLongPress={() => onLongPress(props.todo)}
        >
            <Text style={styles.todoText}>
            {props.idx + 1}: {props.todo.body}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        margin: 5,
        padding: 10,
        minHeight: 50,
        width: '95%',
        color: 'white',
        borderRadius: 5,
        flexWrap: 'wrap'
    },
    todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default TodoItem;
