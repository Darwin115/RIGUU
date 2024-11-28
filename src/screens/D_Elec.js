import React, { useState, useEffect } from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-picker/picker";

function D_Elec({ navigation }) {
  const [selectedElectronic, setSelectedElectronic] = useState("Mobile Phones");
  const [amount, setAmount] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Collection Center 1");

  const locations = {
    "Collection Center 1": { latitude: 21.885215, longitude: -102.291366 },
    "Collection Center 2": { latitude: 21.874840, longitude: -102.294024 },
    "Collection Center 3": { latitude: 21.887001, longitude: -102.303765 },
    "Collection Center 4": { latitude: 21.873456, longitude: -102.317145 },
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: locations["Collection Center 1"].latitude,
    longitude: locations["Collection Center 1"].longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    const location = locations[selectedLocation];
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Type of Electronic Device</Text>
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>Quantity</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedElectronic}
            onValueChange={(itemValue) => setSelectedElectronic(itemValue)}
            style={styles.electronicPicker}
          >
            <Picker.Item label="Mobile Phones" value="Mobile Phones" />
            <Picker.Item label="Laptops" value="Laptops" />
            <Picker.Item label="Televisions" value="Televisions" />
            <Picker.Item label="Cameras" value="Cameras" />
            <Picker.Item label="Radios" value="Radios" />
            <Picker.Item label="Chargers" value="Chargers" />
            <Picker.Item label="Headphones" value="Headphones" />
            <Picker.Item label="Game Consoles" value="Game Consoles" />
            <Picker.Item label="Small Appliances" value="Small Appliances" />
          </Picker>
        </View>

        <TextInput
          style={styles.amountInput}
          placeholder="Quantity"
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
              ? "State DIF Aguascalientes"
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
  electronicPicker: {
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

export default D_Elec;
