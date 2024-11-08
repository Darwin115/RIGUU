import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Box } from "native-base";

function TipsScreen({ navigation }) {
  return (
    <Box style={styles.container}>
      {/* Fila 1 de botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/recipes.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/clothestips.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/medicinetips.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/electronicstips.png")} style={styles.icon} />
        </TouchableOpacity>
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
  button: {
    backgroundColor: "#50B498",
    width: 97,
    height: 97,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default TipsScreen;
