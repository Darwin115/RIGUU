import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View, TextInput, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-picker/picker";
import { Button, VStack } from "native-base";
import { auth } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const firestore = getFirestore();

function D_Med({ navigation }) {
  const { t } = useTranslation();
  const [selectedMedication, setSelectedMedication] = useState("Non-expired medications");
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
      Alert.alert(t("donate_electronics.invalid_input"), t("donate_electronics.invalid_input_message"));
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      Alert.alert(t("donate_electronics.not_logged_in"), t("donate_electronics.not_logged_in_message"));
      return;
    }

    try {
      setIsSubmitting(true);

      await addDoc(collection(firestore, "donations"), {
        categoria: "medicines", // Categoría fija para esta pantalla
        producto: selectedMedication,
        cantidad: parseInt(amount),
        location: selectedLocation,
        userId: user.uid,
        timestamp: new Date(),
      });


      Alert.alert(t("donate_electronics.donation_successful"), t("donate_electronics.donation_successful_message"));
      setAmount("");
    } catch (error) {
      console.error(t("donate_electronics.error_adding_donation"), error);
      Alert.alert(t("donate_electronics.error"), t("donate_electronics.error_message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para tipo de medicina y cantidad */}
      <View style={styles.inputRow}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>{t("donate_medicines.medication_type")}</Text>
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.inputLabel}>{t("donate_medicines.amount")}</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMedication}
            onValueChange={(itemValue) => setSelectedMedication(itemValue)}
            style={styles.medicationPicker}
          >
            <Picker.Item label={t("donate_medicines.non_expired_medications")} value="Non-expired medications" />
            <Picker.Item label={t("donate_medicines.pain_relievers")} value="Pain relievers" />
            <Picker.Item label={t("donate_medicines.antibiotics")} value="Antibiotics" />
            <Picker.Item label={t("donate_medicines.anti_inflammatory_drugs")} value="Anti-inflammatory drugs" />
            <Picker.Item label={t("donate_medicines.vitamins")} value="Vitamins" />
            <Picker.Item label={t("donate_medicines.cough_medicines")} value="Cough medicines" />
            <Picker.Item label={t("donate_medicines.fever_reducers")} value="Fever reducers" />
            <Picker.Item label={t("donate_medicines.hypertension_medications")} value="Hypertension medications" />
            <Picker.Item label={t("donate_medicines.diabetes_medications")} value="Diabetes medications" />
            <Picker.Item label={t("donate_medicines.nutritional_supplements")} value="Nutritional supplements" />
          </Picker>
        </View>

        <TextInput
          style={styles.amountInput}
          placeholder={t("donate_medicines.amount")}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>

      {/* Selección de ubicación */}
      <Text style={styles.mapTitle}>{t("donate_medicines.select_location")}</Text>

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
          <Picker.Item label={t("donate_medicines.collection_center_1")} value="Collection Center 1" />
          <Picker.Item label={t("donate_medicines.collection_center_2")} value="Collection Center 2" />
          <Picker.Item label={t("donate_medicines.collection_center_3")} value="Collection Center 3" />
          <Picker.Item label={t("donate_medicines.collection_center_4")} value="Collection Center 4" />
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
          {t("donate_medicines.donate")}
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
  medicationPicker: {
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

export default D_Med;
