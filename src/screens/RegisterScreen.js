import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, FormControl, Input, Button, Text, Image } from 'native-base';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const firestore = getFirestore();

export default function RegisterScreen({ navigation }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    try {
      // Crear usuario en Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enviar correo de verificación
      await sendEmailVerification(user);

      // Guardar el nombre en la colección `users` en Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        nombre: name,
        email: user.email,
      });

      setSuccessMessage(t('register.success_verification_email'));

      // Redirigir a la pantalla de Login después de un tiempo
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      // Manejo de errores
      if (error.code === 'auth/email-already-in-use') {
        setError(t('register.error_email_in_use'));
      } else if (error.code === 'auth/invalid-email') {
        setError(t('register.error_invalid_email'));
      } else if (error.code === 'auth/weak-password') {
        setError(t('register.error_weak_password'));
      } else {
        setError(t('register.error_generic'));
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
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [error, successMessage]);

  return (
    <Center flex={1} bg="#A2E4B8">
      <Box safeArea p="4" w="90%" maxW="300" py="8" alignItems="center">
        <Image source={require('../../assets/icon.png')} alt="Logo" size="xl" mb="6" />
      </Box>
      <Box safeArea p="4" w="90%" maxW="300" py="8">
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
            <FormControl.Label>{t('register.name_label')}</FormControl.Label>
            <Input
              placeholder={t('register.name_placeholder')}
              value={name}
              onChangeText={setName}
              bg="white"
              borderRadius="10"
              py="3"
              px="4"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>{t('register.email_label')}</FormControl.Label>
            <Input
              placeholder={t('register.email_placeholder')}
              value={email}
              onChangeText={setEmail}
              bg="white"
              borderRadius="10"
              py="3"
              px="4"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>{t('register.password_label')}</FormControl.Label>
            <Input
              placeholder={t('register.password_placeholder')}
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
            {t('register.register_button')}
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
