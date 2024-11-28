// src/screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, FormControl, Input, Button, Text, Link, Image, Alert } from 'native-base';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        navigation.navigate('HomeTabs');
      } else {
        alert('Please verify your email address before logging in.');
        auth.signOut();
      }
    } catch (error) {
      // Mensajes de error personalizados para hacerlos más claros para el usuario
      if (error.code === 'auth/user-not-found') {
        setError('No account was found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        setError('El formato del correo es inválido.');
      } else {
        setError('The mail format is invalid.');
      }
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage('An email has been sent to reset your password.');
    } catch (error) {
      setError('Please enter a valid email address before attempting to reset your password.');
    }
  };

  // Limpiar mensajes de error o confirmación automáticamente después de unos segundos
  useEffect(() => {
    if (error || resetMessage) {
      const timer = setTimeout(() => {
        setError('');
        setResetMessage('');
      }, 5000); // 5 segundos
      return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
    }
  }, [error, resetMessage]);

  return (
    <Center flex={1} bg="#A2E4B8">
      <Box safeArea p="4" w="90%" maxW="300" py="8" alignItems="center">
        {/* Logo */}
        <Image source={require('../../assets/icon.png')} alt="Logo" size="xl" mb="6" />

        {/* Mensajes de Error y Confirmación */}
        {error ? (
          <Box bg="red.600" p="3" mb="4" borderRadius="8" w="100%" alignItems="center">
            <Text color="white" fontSize="sm">{error}</Text>
          </Box>
        ) : null}
        
        {resetMessage ? (
          <Box bg="green.600" p="3" mb="4" borderRadius="8" w="100%" alignItems="center">
            <Text color="white" fontSize="sm">{resetMessage}</Text>
          </Box>
        ) : null}

        <VStack space={4} width="100%">
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
              _focus={{ borderColor: "green.500" }}
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
              _focus={{ borderColor: "green.500" }}
            />
          </FormControl>

          <Link
            mt="1"
            alignSelf="flex-start"
            _text={{ color: "blue.600", fontSize: "sm" }}
            onPress={handlePasswordReset}
          >
            Forgot your password?
          </Link>

          <Button mt="5" colorScheme="teal" borderRadius="10" onPress={handleLogin}>
            LOGIN
          </Button>

          <Link
            mt="3"
            _text={{ color: "blue.600", fontSize: "sm", textAlign: "center" }}
            onPress={() => navigation.navigate('Register')}
          >
            Create account
          </Link>
        </VStack>
      </Box>
    </Center>
  );
}
