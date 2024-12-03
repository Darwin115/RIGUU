import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

function Tips_Clothing() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("t-shirt");

  const recommendations = {
    "t-shirt": [
      t("tips_clothing.recommendations.t-shirt.1"),
      t("tips_clothing.recommendations.t-shirt.2"),
      t("tips_clothing.recommendations.t-shirt.3"),
      t("tips_clothing.recommendations.t-shirt.4"),
      t("tips_clothing.recommendations.t-shirt.5"),
      t("tips_clothing.recommendations.t-shirt.6"),
      t("tips_clothing.recommendations.t-shirt.7"),
    ],
    pants: [
      t("tips_clothing.recommendations.pants.1"),
      t("tips_clothing.recommendations.pants.2"),
      t("tips_clothing.recommendations.pants.3"),
      t("tips_clothing.recommendations.pants.4"),
      t("tips_clothing.recommendations.pants.5"),
      t("tips_clothing.recommendations.pants.6"),
    ],
    dress: [
      t("tips_clothing.recommendations.dress.1"),
      t("tips_clothing.recommendations.dress.2"),
      t("tips_clothing.recommendations.dress.3"),
      t("tips_clothing.recommendations.dress.4"),
      t("tips_clothing.recommendations.dress.5"),
      t("tips_clothing.recommendations.dress.6"),
    ],
    sweater: [
      t("tips_clothing.recommendations.sweater.1"),
      t("tips_clothing.recommendations.sweater.2"),
      t("tips_clothing.recommendations.sweater.3"),
      t("tips_clothing.recommendations.sweater.4"), 
      t("tips_clothing.recommendations.sweater.5"),
      t("tips_clothing.recommendations.sweater.6"),
    ],
    pajamas: [
      t("tips_clothing.recommendations.pajamas.1"),
      t("tips_clothing.recommendations.pajamas.2"),
      t("tips_clothing.recommendations.pajamas.3"),
      t("tips_clothing.recommendations.pajamas.4"),
      t("tips_clothing.recommendations.pajamas.5"),
      t("tips_clothing.recommendations.pajamas.6"),
    ],
    socks: [
      t("tips_clothing.recommendations.socks.1"),
      t("tips_clothing.recommendations.socks.2"),
      t("tips_clothing.recommendations.socks.3"),
      t("tips_clothing.recommendations.socks.4"),
      t("tips_clothing.recommendations.socks.5"),
    ],
    shoes: [
      t("tips_clothing.recommendations.shoes.1"),
      t("tips_clothing.recommendations.shoes.2"),
      t("tips_clothing.recommendations.shoes.3"),
      t("tips_clothing.recommendations.shoes.4"),
    ],
    coat: [
      t("tips_clothing.recommendations.coat.1"),
      t("tips_clothing.recommendations.coat.2"),
      t("tips_clothing.recommendations.coat.3"),
      t("tips_clothing.recommendations.coat.4"),
      t("tips_clothing.recommendations.coat.5"),
    ],
    skirt: [
      t("tips_clothing.recommendations.skirt.1"),
      t("tips_clothing.recommendations.skirt.2"),
      t("tips_clothing.recommendations.skirt.3"),
      t("tips_clothing.recommendations.skirt.4"),
    ],
    suit: [
      t("tips_clothing.recommendations.suit.1"),
      t("tips_clothing.recommendations.suit.2"),
      t("tips_clothing.recommendations.suit.3"),
      t("tips_clothing.recommendations.suit.4"),
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("tips_clothing.title")}
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label={t("tips_clothing.clothing_types.t-shirt")} value="t-shirt" />
          <Picker.Item label={t("tips_clothing.clothing_types.pants")} value="pants" />
          <Picker.Item label={t("tips_clothing.clothing_types.dress")} value="dress" />
          <Picker.Item label={t("tips_clothing.clothing_types.sweater")} value="sweater" />
          <Picker.Item label={t("tips_clothing.clothing_types.pajamas")} value="pajamas" />
          <Picker.Item label={t("tips_clothing.clothing_types.socks")} value="socks" />
          <Picker.Item label={t("tips_clothing.clothing_types.shoes")} value="shoes" />
          <Picker.Item label={t("tips_clothing.clothing_types.coat")} value="coat" />
          <Picker.Item label={t("tips_clothing.clothing_types.skirt")} value="skirt" />
          <Picker.Item label={t("tips_clothing.clothing_types.suit")} value="suit" />
        </Picker>
      </View>

      <Text style={styles.subtitle}>
        {t("tips_clothing.subtitle")} {t(`tips_clothing.clothing_types.${selectedOption}`)}
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
          <Text style={styles.recommendation}>{t("tips_clothing.no_recommendations")}</Text>
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
    color: "#FFFFFF",
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
    backgroundColor: "#468585",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  recommendation: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});

export default Tips_Clothing;
