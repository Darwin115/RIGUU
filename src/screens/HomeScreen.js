import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Fila 1 de botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Boton Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Botón Medicine</Text>
        </TouchableOpacity>
      </View>

      {/* Fila 2 de botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Botón Clothes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Botón Electronics</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  button: {
    backgroundColor: "#50B498",
    width: 97,
    height: 97,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
});

export default HomeScreen;

