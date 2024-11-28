import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Tips_Elec() {
  const [selectedOption, setSelectedOption] = useState("phone");

  const recommendations = {
    phone: [
      "Donate the phone to people in need or to charitable organizations.",
      "Recycle the phone through a specialized center.",
      "Sell it online or in second-hand markets.",
      "Reuse it as a backup phone or for DIY projects.",
      "Donate parts of the phone, such as the battery or screen, to repair shops.",
      "Turn it into a security camera or monitoring device.",
      "Recycle its components like metals and plastics through recycling programs.",
    ],
    laptop: [
      "If in good condition, donate the laptop to an organization or sell it in second-hand shops.",
      "Reuse it for technology or education projects.",
      "Recycle it at a center specializing in electronic devices.",
      "Sell it through online platforms or local stores.",
      "Use it as an entertainment center for the home or for children.",
      "Donate accessories such as keyboards and chargers to those in need.",
    ],
    tablet: [
      "Donate the tablet to someone in need or to an educational institution.",
      "Recycle it properly at a specialized recycling center.",
      "Reuse it as an e-reader or for educational projects.",
      "Turn it into an entertainment device or for smart home control.",
      "Sell it in second-hand markets or buy-sell platforms.",
      "Use it as a music device or in digital art projects.",
    ],
    television: [
      "Donate the TV to a charity or sell it through second-hand outlets.",
      "Reuse it as a computer monitor or for gaming.",
      "Recycle it at specialized centers for proper disposal of its parts.",
      "Sell parts of the TV, such as the screen or electronic components.",
      "Turn it into a DIY project, like an interactive frame or information display.",
    ],
    headphones: [
      "If in good condition, donate the headphones or sell them second-hand.",
      "Reuse them for sound projects or in repairs of other devices.",
      "Recycle the electronic components at a specialized center.",
      "Reuse the parts to make fashion accessories or decorations.",
      "Sell parts like cables or ear pads for use in other devices.",
    ],
    camera: [
      "Donate the camera to an educational institution or a photographer in need.",
      "Sell the camera through second-hand platforms.",
      "Recycle it through programs specializing in electronics.",
      "Reuse it for home recording or photography projects.",
      "Use it for home surveillance or in monitoring events.",
    ],
    console: [
      "If in good condition, donate the console to those who don't have access to one.",
      "Sell it in second-hand markets or online.",
      "Recycle it at a center specializing in electronic devices.",
      "Reuse it to organize an entertainment center or for retro gaming.",
      "Trade it in video game stores or online platforms.",
    ],
    smartwatch: [
      "Donate the smartwatch to someone in need or sell it second-hand.",
      "Reuse it for health or personal monitoring projects.",
      "Recycle it at a center specializing in electronic devices.",
      "Sell parts like bands or batteries for reuse.",
      "Turn it into a fashion accessory or gift it as part of a health kit.",
    ],
    router: [
      "If no longer in use, donate it to an organization in need.",
      "Recycle it properly at a technology-specialized center.",
      "Reuse it as a Wi-Fi access point in another area of the house or office.",
      "Sell it if in good condition through online platforms.",
      "Disassemble it for technology projects or repairs.",
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select an electronic device to get personalized recommendations
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label="Phone" value="phone" />
          <Picker.Item label="Laptop" value="laptop" />
          <Picker.Item label="Tablet" value="tablet" />
          <Picker.Item label="Television" value="television" />
          <Picker.Item label="Headphones" value="headphones" />
          <Picker.Item label="Camera" value="camera" />
          <Picker.Item label="Console" value="console" />
          <Picker.Item label="Smartwatch" value="smartwatch" />
          <Picker.Item label="Router" value="router" />
        </Picker>
      </View>

      <Text style={styles.subtitle}>
        Recommendations for {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
      </Text>

      <ScrollView style={styles.recommendationsList}>
        {Array.isArray(recommendations[selectedOption]) && recommendations[selectedOption].length > 0 ? (
          recommendations[selectedOption].map((recommendation, index) => (
            <View key={index} style={styles.recommendationItem}>
              <Text style={styles.recommendation}>
                - {recommendation}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.recommendation}>No recommendations available for this option.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9CDBA6",
    paddingTop: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#468585",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 25,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontFamily: "Arial",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // White subtitle
    textAlign: "center",
    marginBottom: 1,
    paddingHorizontal: 25,
    marginTop: 3,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  pickerContainer: {
    width: "89%",
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#fff", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10,
  },
  picker: {
    height: 55,
    width: "100%",
  },
  recommendationsList: {
    width: "85%",
    marginTop: 20,
    paddingBottom: 30,
  },
  recommendationItem: {
    backgroundColor: "#468585", // White background for each recommendation
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd", // Gray borders to separate recommendations
  },
  recommendation: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});

export default Tips_Elec;
