import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function Preg_4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          How can I contact technical support?{"\n\n"}
          To contact technical support, there is a section in the configuration screen that offers several ways to contact them. You can choose the option that is most convenient for you to receive assistance.
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Preguntas frecuentes")}>
        <Text style={styles.buttonText}>Go back</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#468585",
    marginBottom: 20,
  },
  termsBox: {
    backgroundColor: "#468585",
    padding: 25,
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
  },
  termsText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#50B498",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default Preg_4;
