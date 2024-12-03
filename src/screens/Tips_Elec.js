import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

function Tips_Elec() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("phone");

  const recommendations = {
    phone: [
      t("tips_elec.recommendations.phone.1"),
      t("tips_elec.recommendations.phone.2"),
      t("tips_elec.recommendations.phone.3"),
      t("tips_elec.recommendations.phone.4"),
      t("tips_elec.recommendations.phone.5"),
      t("tips_elec.recommendations.phone.6"),
      t("tips_elec.recommendations.phone.7"),
    ],
    laptop: [
      t("tips_elec.recommendations.laptop.1"),
      t("tips_elec.recommendations.laptop.2"),
      t("tips_elec.recommendations.laptop.3"),
      t("tips_elec.recommendations.laptop.4"),
      t("tips_elec.recommendations.laptop.5"),
      t("tips_elec.recommendations.laptop.6"),
    ],
    tablet: [
      t("tips_elec.recommendations.tablet.1"),
      t("tips_elec.recommendations.tablet.2"),
      t("tips_elec.recommendations.tablet.3"),
      t("tips_elec.recommendations.tablet.4"),
      t("tips_elec.recommendations.tablet.5"),
      t("tips_elec.recommendations.tablet.6"),
    ],
    television: [
      t("tips_elec.recommendations.television.1"),
      t("tips_elec.recommendations.television.2"),
      t("tips_elec.recommendations.television.3"),
      t("tips_elec.recommendations.television.4"),
      t("tips_elec.recommendations.television.5"),
    ],
    headphones: [
      t("tips_elec.recommendations.headphones.1"),
      t("tips_elec.recommendations.headphones.2"),
      t("tips_elec.recommendations.headphones.3"),
      t("tips_elec.recommendations.headphones.4"),
      t("tips_elec.recommendations.headphones.5"),
    ],
    camera: [
      t("tips_elec.recommendations.camera.1"),
      t("tips_elec.recommendations.camera.2"),
      t("tips_elec.recommendations.camera.3"),
      t("tips_elec.recommendations.camera.4"),
      t("tips_elec.recommendations.camera.5"),
    ],
    console: [
      t("tips_elec.recommendations.console.1"),
      t("tips_elec.recommendations.console.2"),
      t("tips_elec.recommendations.console.3"),
      t("tips_elec.recommendations.console.4"),
      t("tips_elec.recommendations.console.5"),
    ],
    smartwatch: [
      t("tips_elec.recommendations.smartwatch.1"),
      t("tips_elec.recommendations.smartwatch.2"),
      t("tips_elec.recommendations.smartwatch.3"),
      t("tips_elec.recommendations.smartwatch.4"),
      t("tips_elec.recommendations.smartwatch.5"),
    ],
    router: [
      t("tips_elec.recommendations.router.1"),
      t("tips_elec.recommendations.router.2"),
      t("tips_elec.recommendations.router.3"),
      t("tips_elec.recommendations.router.4"),
      t("tips_elec.recommendations.router.5"),
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("tips_elec.title")}
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label={t("tips_elec.phone")} value="phone" />
          <Picker.Item label={t("tips_elec.laptop")} value="laptop" />
          <Picker.Item label={t("tips_elec.tablet")} value="tablet" />
          <Picker.Item label={t("tips_elec.television")} value="television" />
          <Picker.Item label={t("tips_elec.headphones")} value="headphones" />
          <Picker.Item label={t("tips_elec.camera")} value="camera" />
          <Picker.Item label={t("tips_elec.console")} value="console" />
          <Picker.Item label={t("tips_elec.smartwatch")} value="smartwatch" />
          <Picker.Item label={t("tips_elec.router")} value="router" />
        </Picker>
      </View>

      <Text style={styles.subtitle}>
        {t("tips_elec.subtitle")} {t(`tips_elec.${selectedOption}`)}
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
          <Text style={styles.recommendation}>{t("tips_elec.no_recommendations")}</Text>
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
