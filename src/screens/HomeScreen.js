import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import { Box } from "native-base";

function HomeScreen({ navigation }) {
  const [donations, setDonations] = useState(""); // Estado para el cuadro de texto

  return (
    <Box style={styles.container}>
      {/* Fila 1 de botones */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Comida</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Comida")}
            style={styles.button}
          >
            <Image source={require("../../assets/food.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Ropa</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ropa")}
            style={styles.button}
          >
            <Image source={require("../../assets/clothes.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Medicinas</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Medicina")}
            style={styles.button}
          >
            <Image source={require("../../assets/medicine.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Electrónica</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Electrónicos")}
            style={styles.button}
          >
            <Image source={require("../../assets/electronics.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Título y cuadro de texto para tus últimas donaciones */}
      <Text style={styles.donationsTitle}>Tus últimas donaciones</Text>
      <TextInput
        style={styles.donationsInput}
        placeholder="Texto"
        value={donations}
        onChangeText={setDonations}
      />
      <TouchableOpacity style={styles.donationsButton} onPress={() => navigation.navigate("Tus Donaciones")}>
        <Text style={styles.donationsButtonText}>Tus donaciones</Text>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "#9CDBA6",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "#50B498",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  buttonText: {
    marginBottom: 8,
    color: "#468585",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  donationsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30, // Aumentado para más espacio entre los botones y el texto
    marginBottom: 5,
    color: "#468585",
  },
  donationsInput: {
    height: 60,
    width: "80%",
    borderColor: "#50B498",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  donationsButton: {
    backgroundColor: "#50B498",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, // Aumento el margen superior para separar más del cuadro de texto
  },
  donationsButtonText: {
    color: "#FFFFFF", // Cambiado a blanco solo para este botón
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
