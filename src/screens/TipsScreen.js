import { View, Text, Button } from "react-native";

function TipsScreen({ navigation }) {
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text style={{ fontSize: 24 }}>Pantalla Prueva</Text>

      <Button
        onPress={() => navigation.navigate("Noti")} // Asegúrate de que el nombre de la pantalla sea correcto
        title="Boton 1"
      />
    </View>
  );
}

export default TipsScreen;
