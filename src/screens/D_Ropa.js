import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View, TextInput, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-picker/picker";
import { Button, VStack } from "native-base";
import { auth } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firestore = getFirestore();

function D_Clothing({ navigation }) {
  const [selectedClothing, setSelectedClothing] = useState("T-Shirts");
  const [amount, setAmount] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Collection Center 1");
  const [mapRegion, setMapRegion] = useState({
    latitude: 21.885215,
    longitude: -102.291366,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = {
    "Collection Center 1": { latitude: 21.885215, longitude: -102.291366 },
    "Collection Center 2": { latitude: 21.874840, longitude: -102.294024 },
    "Collection Center 3": { latitude: 21.887001, longitude: -102.303765 },
    "Collection Center 4": { latitude: 21.873456, longitude: -102.317145 },
  };

  useEffect(() => {
    const location = locations[selectedLocation];
    if (location) {
      setMapRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [selectedLocation]);

  const handleDonate = async () => {
    if (!amount || isNaN(amount) || parseInt(amount) <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid amount.");
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      Alert.alert("Not Logged In", "You must be logged in to make a donation.");
      return;
    }

    try {
      setIsSubmitting(true);

      await addDoc(collection(firestore, "donations"), {
        categoria: "ropa", // Categoría fija para esta pantalla
        producto: selectedClothing,
        cantidad: parseInt(amount),
        location: selectedLocation,
        userId: user.uid,
        timestamp: new Date(),
      });

      Alert.alert("Donation Successful", "Your donation has been recorded!");
      setAmount("");
    } catch (error) {
      console.error("Error adding donation: ", error);
      Alert.alert("Error", "Failed to record the donation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para tipo de ropa y cantidad */}
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
          keyboardType="numeric"
        />
      </View>

      {/* Selección de ubicación */}
      <Text style={styles.mapTitle}>Select Location</Text>

      <MapView key={mapRegion.latitude} style={styles.mapContainer} region={mapRegion}>
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

      {/* Botón de donación con retroalimentación visual */}
      <VStack style={styles.donateButtonContainer}>
        <Button
          onPress={handleDonate}
          isLoading={isSubmitting}
          _pressed={{
            bg: "#248277",
          }}
          colorScheme="teal"
          borderRadius="10"
          mt="4"
        >
          Donate
        </Button>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9CDBA6",
    paddingTop: 50,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    width: "80%",
  },
  inputLabelContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 16,
    color: "#468585",
  },
  pickerContainer: {
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  clothingPicker: {
    height: 50,
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
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#468585",
    marginTop: 20,
  },
  mapContainer: {
    width: "80%",
    height: 300,
    marginVertical: 10,
  },
  locationPickerContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  donateButtonContainer: {
    width: "80%",
    marginTop: 30,
  },
});

export default D_Clothing;
