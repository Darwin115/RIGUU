import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importar los íconos

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Noti")}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Términos y Condiciones")}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Guía rápida")}>
        <Text style={styles.buttonText}>Quick guide</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Preguntas frecuentes")}>
        <Text style={styles.buttonText}>Frequently Asked Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Contacto")}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>

      {/* Botón de Logout con ícono */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Donations")}>
        <Ionicons
          name="log-out-outline" // Aquí eliges el nombre del ícono que desees
          size={24} // Tamaño del ícono
          color="white" // Color del ícono
          style={styles.icon} // Puedes agregar más estilo si lo deseas
        />
        <Text style={styles.buttonText}>Logout</Text>
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

export default SettingsScreen;
