import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Foto de perfil con ruta local */}
      <Image
        source={require('../../assets/electronics.png')} // Ruta local a la imagen
        style={styles.profileImage}
      />

      {/* Información del usuario con salto de línea */}
      <Text style={styles.titleText}>
        Nombre de Usuario:
      </Text>
      <Text style={styles.text}>
        Juan Pérez
      </Text>

      <Text style={styles.titleText}>
        Email:
      </Text>
      <Text style={styles.text}>
        juan.perez@example.com
      </Text>

      <Text style={styles.titleText}>
        Teléfono:
      </Text>
      <Text style={styles.text}>
        +52 123 456 7890
      </Text>

      <Text style={styles.titleText}>
        Localización:
      </Text>
      <Text style={styles.text}>
        Aguascalientes, México
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    backgroundColor: '#9CDBA6',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace la imagen redonda
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,  // Tamaño de fuente más grande para los títulos
    fontWeight: 'bold', // Negritas
    color: '#468585',
    marginBottom: 5,
    textAlign: 'center', // Centra el texto
  },
  text: {
    fontSize: 18,
    color: '#468585',
    marginBottom: 20, // Mayor espacio debajo del texto
    marginTop: 5, // Espacio arriba del texto
    textAlign: 'center', // Centra el texto
  },
});

export default NotificationScreen;
