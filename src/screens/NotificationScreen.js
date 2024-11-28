import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile picture with local path */}
      <Image
        source={require('../../assets/electronics.png')} 
        style={styles.profileImage}
      />

      {/* User information with line breaks */}
      <Text style={styles.titleText}>
        Username:
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
        Phone:
      </Text>
      <Text style={styles.text}>
        +52 123 456 7890
      </Text>

      <Text style={styles.titleText}>
        Location:
      </Text>
      <Text style={styles.text}>
        Aguascalientes, Mexico
      </Text>

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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,  
    fontWeight: 'bold', 
    color: '#468585',
    marginBottom: 5,
    textAlign: 'center', 
  },
  text: {
    fontSize: 18,
    color: '#468585',
    marginBottom: 20, 
    marginTop: 5, 
    textAlign: 'center', 
  },
});

export default NotificationScreen;
