import React, {useState} from 'react'
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import {TODOS} from '../data/data'
import TodoItem from '../components/TodoItem'

const ActiveScreen = () => {
    return(
        <ImageBackground style={styles.container} source={{ uri: 'https://free4kwallpapers.com/uploads/originals/2019/12/05/eclipse-from-space-wallpaper.jpg' }}>

        </ImageBackground>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        paddingTop: 10
    }
})

export default ActiveScreen;