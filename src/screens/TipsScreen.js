import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Box } from "native-base";

function TipsScreen({ navigation }) {
  return (
    <Box style={styles.container}>
      {/* Fila 1 de botones */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Recetas</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tips Comida")}
            style={styles.button}
          >
            <Image source={require("../../assets/recipes.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Ropa</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tips Ropa")}
            style={styles.button}
          >
            <Image source={require("../../assets/clothestips.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Medicinas</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tips Medicinas")}
            style={styles.button}
          >
            <Image source={require("../../assets/medicinetips.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Electrónica</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tips Electrónicos")}
            style={styles.button}
          >
            <Image source={require("../../assets/electronicstips.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CDBA6",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: "center", // Centra los elementos dentro del contenedor
    marginHorizontal: 15, // Espaciado entre los botones
  },
  button: {
    backgroundColor: "#50B498",
    width: 150, // Aumentado para mayor tamaño de las imágenes
    height: 150, // Aumentado para mayor tamaño de las imágenes
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 100, // Aumentado para mayor tamaño de las imágenes
    height: 100, // Aumentado para mayor tamaño de las imágenes
  },
  buttonText: {
    marginBottom: 8, // Espacio entre el texto y la imagen
    color: "#fff",
    fontSize: 20, // Tamaño de texto aumentado para hacerlo más grande
    textAlign: "center",
    fontWeight: "bold", // Opcional: hacer el texto en negrita
  },
});

export default TipsScreen;
