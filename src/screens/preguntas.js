import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar los íconos

function Preguntas({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 1")}>
        <Text style={styles.buttonText}>Pregunta 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 2")}>
        <Text style={styles.buttonText}>Pregunta 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 3")}>
        <Text style={styles.buttonText}>Pregunta 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 4")}>
        <Text style={styles.buttonText}>Pregunta 4</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CDBA6",
    paddingHorizontal: 20, // Añadido padding horizontal para que no toquen los bordes
  },
  buttonContainer: {
    backgroundColor: "#50B498",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    width: "100%", // Los botones ocupan todo el ancho
    flexDirection: "row", // Asegura que el ícono y el texto estén en una fila
    justifyContent: "center", // Centra el contenido
  },
  buttonText: {
    color: "#fff", // Color del texto del botón
    fontSize: 20, // Tamaño de la fuente más grande
    textAlign: "center", // Asegura que el texto esté centrado
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y el texto
  }
});

export default Preguntas;
