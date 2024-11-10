import React, { useState } from "react";
import { Button, View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

function Tips_Med({ navigation }) {
  const [input1, setInput1] = useState(""); // Primer campo de texto
  const [input2, setInput2] = useState(""); // Segundo campo de texto
  const [input3, setInput3] = useState(""); // Campo de texto más grande

  return (
    <View style={styles.container}>
      {/* Título y primer campo de texto */}
      <Text style={styles.label}>Tipo de medicina</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el tipo de medicina"
        value={input1}
        onChangeText={setInput1}
      />
      
      {/* Título y segundo campo de texto */}
      <Text style={styles.label}>Estado de la medicina</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el estado de la medicina"
        value={input2}
        onChangeText={setInput2}
      />
      
      {/* Botón Enviar con estilo personalizado */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Donations')}
      >
        <Text style={styles.actionButtonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Título y campo de texto más grande */}
      <Text style={styles.label}>¿Puede probar?</Text>
      <TextInput
        style={styles.largeInput}
        placeholder="Escribe si puede probar"
        value={input3}
        onChangeText={setInput3}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#9CDBA6",
    paddingTop: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#468585",
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  largeInput: {
    height: 100,
    width: "80%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 50,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  actionButton: {
    marginBottom: 20, // Aumenté el espacio para separar el botón
    backgroundColor: "#50B498",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "80%", // Botón con ancho mayor
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Tips_Med;
