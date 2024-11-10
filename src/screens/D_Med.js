import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";

function D_Med({ navigation }) {
  const [input1, setInput1] = useState(""); // Estado para el primer campo de texto
  const [input2, setInput2] = useState(""); // Estado para el segundo campo de texto

  return (
    <View style={styles.container}>
      {/* Títulos de los campos de texto */}
      <View style={styles.inputRow}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Objet</Text>
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Amount</Text>
        </View>
      </View>

      {/* Fila de campos de texto en la parte superior */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="..."
          value={input1}
          onChangeText={setInput1}
        />
        <TextInput
          style={styles.input}
          placeholder="..."
          value={input2}
          onChangeText={setInput2}
        />
      </View>

      {/* Botón de acción debajo de los campos de texto usando TouchableOpacity */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => console.log("Botón presionado")}
      >
        <Text style={styles.actionButtonText}>Add</Text>
      </TouchableOpacity>

      {/* Título para el mapa */}
      <Text style={styles.mapTitle}>Seleccionar lugar</Text>

      {/* Cuadro centrado para el mapa */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapText}>Aquí irá el mapa</Text>
      </View>

      {/* Botón "Donar" debajo del mapa, envuelto en un View para ajustar el tamaño */}
      <View style={styles.donateButtonContainer}>
        <Button
          onPress={() => console.log("Donar presionado")}
          title="Donar"
          color="#50B498"
        />
      </View>
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
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  inputLabelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 16,
    color: "#468585",
    marginBottom: 2,
  },
  input: {
    height: 40,
    width: "40%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    color: "#468585",
  },
  actionButton: {
    marginBottom: 10, // Reducción del margen entre el botón y el mapa
    backgroundColor: "#50B498",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "80%", // Aumentando el ancho del botón
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#468585",
    marginTop: 20, // Reducción del espacio entre el botón y el título
  },
  mapContainer: {
    width: "80%",
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10, // Reducción del margen vertical
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#468585",
    borderWidth: 2,
  },
  mapText: {
    color: "#468585",
    fontSize: 18,
  },
  donateButtonContainer: {
    width: "80%", // Aumentando el ancho del botón "Donar"
    marginTop: 20,
  },
});

export default D_Med;