import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Box } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <Box style={styles.container}>
      {/* Fila 1 de botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/food.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/clothes.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/medicine.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tips")}
          style={styles.button}
        >
          <Image source={require("../../assets/electronics.png")} style={styles.icon} />
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

export default HomeScreen;
