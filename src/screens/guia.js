import React, { useState, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';

function Guia({ navigation }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); 
 
  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    videoRef.current.playAsync(); 
  };

 
  const handlePauseButtonClick = () => {
    setIsPlaying(false);
    videoRef.current.pauseAsync(); 
  };

 
  const handleRestartButtonClick = () => {
    setIsPlaying(true);
    videoRef.current.stopAsync(); 
    videoRef.current.playFromPositionAsync(0); 
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.headerText}>Video Guide</Text>

      {/* Video siempre visible con controles nativos */}
      <Video
        ref={videoRef}
        source={require('../../assets/video.mp4')} 
        style={styles.video}
        useNativeControls={true} 
        resizeMode="contain"
        isLooping={false}
        shouldPlay={isPlaying}
      />

      {/* Botones personalizados para controlar el video */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePlayButtonClick}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePauseButtonClick}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRestartButtonClick}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9CDBA6',
    padding: 20,
  },
  headerText: {
    fontSize: 36, 
    fontWeight: 'bold',
    color: '#468585',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 5, 
  },
  buttonsContainer: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'stretch', 
    width: '100%',
    marginBottom: 5, 
  },
  button: {
    marginBottom: 16, 
    backgroundColor: '#50B498', 
    paddingVertical: 15, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 5, 
  },
  buttonText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: 'white', 
  }
});

export default Guia;
