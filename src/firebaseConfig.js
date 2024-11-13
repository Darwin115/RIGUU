// src/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpej7oD_F14CAITgvLvUWBINw0Z8Zjlfs",
  authDomain: "riguu-c4b5b.firebaseapp.com",
  projectId: "riguu-c4b5b",
  storageBucket: "riguu-c4b5b.appspot.com",
  messagingSenderId: "910440713926",
  appId: "1:910440713926:web:2df16308942117e60e51c7",
  measurementId: "G-HK7RWJCKFF"
};

// Inicializar Firebase solo si no está ya inicializado
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Exportar la instancia de autenticación
export const auth = getAuth();
