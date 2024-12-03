import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

function Preguntas({ navigation }) {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 1")}>
        <Text style={styles.buttonText}>{t('questions.question1')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 2")}>
        <Text style={styles.buttonText}>{t('questions.question2')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 3")}>
        <Text style={styles.buttonText}>{t('questions.question3')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Pregunta 4")}>
        <Text style={styles.buttonText}>{t('questions.question4')}</Text>
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
    paddingHorizontal: 20, 
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
    fontSize: 20, 
    textAlign: "center", 
  },
  icon: {
    marginRight: 10, 
  }
});

export default Preguntas;
