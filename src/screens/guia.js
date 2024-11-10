import React, { useState, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';

function Guia({ navigation }) {
  // Estado para controlar si el video está pausado o reproduciéndose
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Referencia al componente de video para controlarlo

  // Función para reproducir el video
  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    videoRef.current.playAsync(); // Reproduce el video
  };

  // Función para pausar el video
  const handlePauseButtonClick = () => {
    setIsPlaying(false);
    videoRef.current.pauseAsync(); // Pausa el video
  };

  // Función para reiniciar el video
  const handleRestartButtonClick = () => {
    setIsPlaying(true);
    videoRef.current.stopAsync(); // Detiene el video
    videoRef.current.playFromPositionAsync(0); // Reproduce el video desde el principio
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.headerText}>Vídeo Guía</Text>

      {/* Video siempre visible con controles nativos */}
      <Video
        ref={videoRef}
        source={require('../../assets/video.mp4')} // Ruta del video local en la carpeta assets
        style={styles.video}
        useNativeControls={true} // Habilita los controles nativos
        resizeMode="contain"
        isLooping={false}
        shouldPlay={isPlaying} // Controla si el video debe reproducirse
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
    fontSize: 36, // Aumenta el tamaño del título
    fontWeight: 'bold',
    color: '#468585',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 5, // Reducir aún más el margen debajo del video
  },
  buttonsContainer: {
    flexDirection: 'column', // Los botones estarán en una columna
    justifyContent: 'center',
    alignItems: 'stretch', // Los botones ocuparán todo el ancho disponible
    width: '100%',
    marginBottom: 5, // Reducir aún más el margen debajo de los botones
  },
  button: {
    marginBottom: 16, // Agregar separación entre los botones
    backgroundColor: '#50B498', // Color de fondo del botón
    paddingVertical: 15, // Altura del botón
    alignItems: 'center', // Centrar el texto dentro del botón
    justifyContent: 'center', // Centrar el texto dentro del botón
    borderRadius: 5, // Bordes redondeados
  },
  buttonText: {
    fontSize: 20, // Tamaño de fuente más grande
    fontWeight: 'bold',
    color: 'white', // Color del texto
  }
});

export default Guia;
