import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SingleTodoScreen = ({route}) => {
    const { id, status, body } = route.params.updatedTodo;
    return (
        <ImageBackground style={styles.container} source={{ uri: 'https://free4kwallpapers.com/uploads/originals/2019/12/05/eclipse-from-space-wallpaper.jpg' }}>
            <Text style={styles.headerText}>
                {id}. {status}
            </Text>
            <Text style={styles.bodyText}>{body}</Text>
        </ImageBackground>  
    );
};

export default SingleTodoScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',

},
headerContainer: {
    flexDirection: 'row'
},
headerText: {
    fontSize: 25,
    color:'white',
    margin: 20
},
bodyText: {
    fontSize: 45,
    color: 'white',
    margin: 10
}
});