import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

const CompleteScreen = () => {
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
      }
})

export default CompleteScreen;
