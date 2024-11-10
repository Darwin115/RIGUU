import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function Preg_2({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Caja con el texto de los términos y condiciones */}
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          Pregunta 2: {"\n\n"}
          Este espacio corresponde a las preguntas más frecuentes
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Preguntas frecuentes")}>
        <Text style={styles.buttonText}>Volver atrás</Text>
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
    padding: 20,
  },
  headerText: {
    fontSize: 28, // Aumenté el tamaño de la fuente
    fontWeight: "bold",
    color: "#468585",
    marginBottom: 20,
  },
  termsBox: {
    backgroundColor: "#468585", // Caja con fondo azul
    padding: 25, // Mayor padding para hacer la caja más espaciosa
    borderRadius: 10,
    marginBottom: 20,
    width: "90%", // Ocupa un 90% del ancho de la pantalla
  },
  termsText: {
    fontSize: 20, // Aumenté el tamaño del texto
    color: "#fff", // Texto blanco
    textAlign: "center", // Centra el texto dentro de la caja
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
    color: "#fff", // Cambié el color del texto a blanco
    fontSize: 18, // Ajusté el tamaño del texto del botón
    fontWeight: "bold", // Texto en negritas
  }
});

export default Preg_2;
