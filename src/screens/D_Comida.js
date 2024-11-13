import React, { useState, useEffect } from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-picker/picker";

function  D_Comida({ navigation }) {
  const [selectedFood, setSelectedFood] = useState("Enlatados");
  const [amount, setAmount] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Centro de Acopio 1");

  // Coordenadas para los centros de acopio
  const locations = {
    "Centro de Acopio 1": { latitude: 21.885215, longitude: -102.291366 },
    "Centro de Acopio 2": { latitude: 21.874840, longitude: -102.294024 },
    "Centro de Acopio 3": { latitude: 21.887001, longitude: -102.303765 },
    "Centro de Acopio 4": { latitude: 21.873456, longitude: -102.317145 },
  };

  // Estado para manejar la región del mapa
  const [mapRegion, setMapRegion] = useState({
    latitude: locations["Centro de Acopio 1"].latitude,
    longitude: locations["Centro de Acopio 1"].longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  // Estado para forzar la recarga del mapa cuando cambie la ubicación seleccionada
  const [mapKey, setMapKey] = useState(0);

  // Actualiza la región del mapa cuando cambia la ubicación seleccionada
  useEffect(() => {
    const location = locations[selectedLocation];
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      // Forzar la recarga del mapa incrementando la clave
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [selectedLocation]); // Esto asegura que la región se actualice correctamente cuando cambie la ubicación

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Tipo de Alimento</Text>
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Cantidad</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedFood}
            onValueChange={(itemValue) => setSelectedFood(itemValue)}
            style={styles.foodPicker}
          >
            <Picker.Item label="Enlatados" value="Enlatados" />
            <Picker.Item label="Cereales" value="Cereales" />
            <Picker.Item label="Agua Embotellada" value="Agua Embotellada" />
            <Picker.Item label="Arroz" value="Arroz" />
            <Picker.Item label="Pasta" value="Pasta" />
            <Picker.Item label="Frutas Secas" value="Frutas Secas" />
            <Picker.Item label="Aceite" value="Aceite" />
            <Picker.Item label="Azúcar" value="Azúcar" />
          </Picker>
        </View>

        <TextInput
          style={styles.amountInput}
          placeholder="Cantidad"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <Text style={styles.mapTitle}>Seleccionar lugar</Text>

      <MapView
        key={mapKey} // Clave dinámica para forzar la recarga del mapa
        style={styles.mapContainer}
        region={mapRegion} // Usamos 'region' para asegurar que el mapa siga la región seleccionada
      >
        <Marker
          coordinate={locations[selectedLocation]}
          title={selectedLocation}
          description={
            selectedLocation === "Centro de Acopio 1"
              ? "Cruz Roja Aguascalientes"
              : selectedLocation === "Centro de Acopio 2"
              ? "DIF Estatal Aguascalientes"
              : selectedLocation === "Centro de Acopio 3"
              ? "Banco de Alimentos A.C."
              : "Parroquia del Sagrario"
          }
        />
      </MapView>

      <View style={styles.locationPickerContainer}>
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Centro de Acopio 1 - Cruz Roja Aguascalientes" value="Centro de Acopio 1" />
          <Picker.Item label="Centro de Acopio 2 - DIF Estatal Aguascalientes" value="Centro de Acopio 2" />
          <Picker.Item label="Centro de Acopio 3 - Banco de Alimentos A.C." value="Centro de Acopio 3" />
          <Picker.Item label="Centro de Acopio 4 - Parroquia del Sagrario" value="Centro de Acopio 4" />
        </Picker>
      </View>

      <View style={styles.donateButtonContainer}>
        <Button onPress={() => console.log("Donar presionado")} title="Donar" color="#50B498" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#9CDBA6",
    paddingTop: 50,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
  inputLabelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 16,
    color: "#468585",
    marginBottom: 2,
  },
  pickerContainer: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  foodPicker: {
    height: 49,
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#468585",
    width: "100%",
  },
  locationPickerContainer: {
    width: "90%",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    height: 60,
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#468585",
    width: "100%",
  },
  amountInput: {
    height: 50,
    width: "50%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    color: "#468585",
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#468585",
    marginTop: 20,
  },
  mapContainer: {
    width: "80%",
    height: 350,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#468585",
    borderWidth: 2,
  },
  donateButtonContainer: {
    width: "80%",
    marginTop: 40,
  },
});




export default D_Comida;
