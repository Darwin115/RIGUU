// src/screens/RegisterScreen.js
import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, FormControl, Input, Button, Text, Pressable } from 'native-base';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    try {
      // Crear usuario en Firebase usando el nuevo método modular
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enviar correo de verificación
      await sendEmailVerification(user);
      setSuccessMessage('Correo de verificación enviado. Revisa tu bandeja de entrada.');

      // Redirigir a la pantalla de Login después de un tiempo
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      // Mensajes de error personalizados
      if (error.code === 'auth/email-already-in-use') {
        setError('El correo ya está en uso. Intenta con otro.');
      } else if (error.code === 'auth/invalid-email') {
        setError('El formato del correo es inválido.');
      } else if (error.code === 'auth/weak-password') {
        setError('La contraseña es muy débil. Usa al menos 6 caracteres.');
      } else {
        setError('Error al registrar. Intenta nuevamente.');
      }
    }
  };

  // Limpiar mensajes de error o confirmación automáticamente después de unos segundos
  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError('');
        setSuccessMessage('');
      }, 5000); // 5 segundos
      return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
    }
  }, [error, successMessage]);

  return (
    <Center flex={1} bg="#A2E4B8">
      <Box safeArea p="4" w="90%" maxW="300" py="8">
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            padding: 8,
            backgroundColor: 'teal',
            borderRadius: 4,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="6">
          REGISTER
        </Text>
        
        {/* Mensajes de Error y Confirmación */}
        {error ? (
          <Box bg="red.600" p="3" mb="4" borderRadius="8" w="100%" alignItems="center">
            <Text color="white" fontSize="sm">{error}</Text>
          </Box>
        ) : null}
        
        {successMessage ? (
          <Box bg="green.600" p="3" mb="4" borderRadius="8" w="100%" alignItems="center">
            <Text color="white" fontSize="sm">{successMessage}</Text>
          </Box>
        ) : null}

        <VStack space={4}>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              placeholder="Enter name"
              value={name}
              onChangeText={setName}
              bg="white"
              borderRadius="10"
              py="3"
              px="4"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              bg="white"
              borderRadius="10"
              py="3"
              px="4"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="Enter password"
              type="password"
              value={password}
              onChangeText={setPassword}
              bg="white"
              borderRadius="10"
              py="3"
              px="4"
            />
          </FormControl>

          <Button mt="5" colorScheme="teal" borderRadius="10" onPress={handleRegister}>
            REGISTER
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
