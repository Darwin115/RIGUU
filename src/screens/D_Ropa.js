import React, { useState, useEffect } from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-picker/picker";

function D_Clothing({ navigation }) {
  const [selectedClothing, setSelectedClothing] = useState("T-Shirts");
  const [amount, setAmount] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Collection Center 1");

  // Coordinates for collection centers
  const locations = {
    "Collection Center 1": { latitude: 21.885215, longitude: -102.291366 },
    "Collection Center 2": { latitude: 21.874840, longitude: -102.294024 },
    "Collection Center 3": { latitude: 21.887001, longitude: -102.303765 },
    "Collection Center 4": { latitude: 21.873456, longitude: -102.317145 },
  };

  // State to manage the map region
  const [mapRegion, setMapRegion] = useState({
    latitude: locations["Collection Center 1"].latitude,
    longitude: locations["Collection Center 1"].longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  // State to force map reload when the selected location changes
  const [mapKey, setMapKey] = useState(0);

  // Update the map region when the selected location changes
  useEffect(() => {
    const location = locations[selectedLocation];
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      setMapKey((prevKey) => prevKey + 1); // Force map reload
    }
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Clothing Type</Text>
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Amount</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedClothing}
            onValueChange={(itemValue) => setSelectedClothing(itemValue)}
            style={styles.clothingPicker}
          >
            <Picker.Item label="T-Shirts" value="T-Shirts" />
            <Picker.Item label="Pants" value="Pants" />
            <Picker.Item label="Jackets" value="Jackets" />
            <Picker.Item label="Shoes" value="Shoes" />
            <Picker.Item label="Sheets" value="Sheets" />
            <Picker.Item label="Scarves" value="Scarves" />
            <Picker.Item label="Gloves" value="Gloves" />
            <Picker.Item label="Hats" value="Hats" />
          </Picker>
        </View>

        <TextInput
          style={styles.amountInput}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <Text style={styles.mapTitle}>Select Location</Text>

      <MapView
        key={mapKey}
        style={styles.mapContainer}
        region={mapRegion}
      >
        <Marker
          coordinate={locations[selectedLocation]}
          title={selectedLocation}
          description={
            selectedLocation === "Collection Center 1"
              ? "Red Cross Aguascalientes"
              : selectedLocation === "Collection Center 2"
              ? "DIF Estatal Aguascalientes"
              : selectedLocation === "Collection Center 3"
              ? "Food Bank A.C."
              : "Sagrario Parish"
          }
        />
      </MapView>

      <View style={styles.locationPickerContainer}>
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Collection Center 1 - Cruz Roja Aguascalientes" value="Collection Center 1" />
          <Picker.Item label="Collection Center 2 - DIF Estatal Aguascalientes" value="Collection Center 2" />
          <Picker.Item label="Collection Center 3 - Banco de Alimentos A.C." value="Collection Center 3" />
          <Picker.Item label="Collection Center 4 - Parroquia del Sagrario" value="Collection Center 4" />
        </Picker>
      </View>

      <View style={styles.donateButtonContainer}>
        <Button onPress={() => console.log("Donate pressed")} title="Donate" color="#50B498" />
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
  clothingPicker: {
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

export default D_Clothing;
