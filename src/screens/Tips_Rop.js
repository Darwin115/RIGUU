import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Tips_Clothing() {
  const [selectedOption, setSelectedOption] = useState("t-shirt");

  const recommendations = {
    "t-shirt": [
      "Donate the t-shirt to charity organizations or recycling centers.",
      "Repurpose it into a cleaning rag or other household uses.",
      "Transform it into an accessory like a reusable bag.",
      "Recycle it to create new textile products or garments.",
      "Turn it into a child's t-shirt by cutting and sewing the bottom part.",
      "Use it as fabric for new projects, such as pillows or cushions.",
      "Transform it into a mask or fashion accessory.",
      "Sell or exchange it in second-hand markets or online stores.",
    ],
    pants: [
      "If no longer used, donate them to people in need or sell them in second-hand stores.",
      "Repurpose them to create other accessories like backpacks or covers.",
      "Use them as material for crafts or art projects.",
      "Textile recycling: take them to clothing recycling centers.",
      "If the material allows, use them to make a cloth bag or backpack.",
      "Turn them into shorts or a denim skirt.",
      "Donate them to sewing workshops for art or fashion projects.",
    ],
    dress: [
      "If no longer used, donate it to a charity or sell it in second-hand stores.",
      "Transform it into a blouse or a skirt by reusing the material.",
      "Convert it into a cloth bag or accessories like headbands or scarves.",
      "Recycle it to make cushions, rugs, or other decorative items.",
      "If of good quality, resell it online or in second-hand markets.",
      "Textile recycling: take it to a specialized center.",
      "Reuse it as fabric for art or sewing projects.",
    ],
    sweater: [
      "Donate the sweater to a charity or sell it in second-hand stores.",
      "Repurpose it to make a blanket or cushion.",
      "Turn it into a pad for the office or home.",
      "Transform it into a bag or backpack by reusing the fabric.",
      "Reuse it as fabric for sewing or craft projects.",
      "If in good condition, sell it online or in second-hand markets.",
      "Recycle it through specialized textile recycling centers.",
    ],
    pajamas: [
      "If in good condition, donate or sell the pajama set.",
      "Repurpose the fabric to create other projects like covers or cushions.",
      "Transform it into cleaning rags or use it for other household purposes.",
      "Turn the top into a blouse or the bottom into shorts.",
      "Recycle it for craft or art projects.",
      "If the fabric is suitable, repurpose it to make a bag or backpack.",
      "Donate or exchange it in second-hand markets.",
    ],
    socks: [
      "Reuse them as cleaning rags or for crafting.",
      "Turn them into dolls or toys for children.",
      "Use them as material for art or sewing projects.",
      "Donate them if in good condition.",
      "Transform them into a bag or fashion accessory.",
      "Recycle socks through textile recycling centers.",
    ],
    shoes: [
      "If in good condition, donate the shoes to those in need.",
      "Sell them in second-hand markets or online.",
      "Repurpose them as material for art or crafting projects.",
      "Shoe recycling: take them to a specialized center.",
      "Transform them into an accessory, such as a decorative pot or pendant.",
    ],
    coat: [
      "If in good condition, donate the coat to charities or sell it in second-hand stores.",
      "Repurpose the material to make bags, backpacks, or new accessories.",
      "Convert it into a blanket for home use.",
      "Textile recycling: take it to a specialized center.",
      "Use it as fabric for sewing or craft projects.",
      "Repurpose it to make covers or protectors for furniture.",
    ],
    skirt: [
      "If in good condition, donate the skirt or sell it in second-hand stores.",
      "Transform it into a blouse or top by reusing the fabric.",
      "Convert it into a cloth bag or accessories like headbands or scarves.",
      "Reuse it as material for sewing or art projects.",
      "Recycle it at a specialized textile recycling center.",
    ],
    suit: [
      "If in good condition, donate the suit or sell it in second-hand stores.",
      "Transform it into a skirt or blouse by reusing the fabric.",
      "Recycle it for art or sewing projects.",
      "Donate it to a charity for those in need.",
      "Repurpose it to create accessories like backpacks or cases.",
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select a type of clothing to get personalized recommendations
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label="T-Shirt" value="t-shirt" />
          <Picker.Item label="Pants" value="pants" />
          <Picker.Item label="Dress" value="dress" />
          <Picker.Item label="Sweater" value="sweater" />
          <Picker.Item label="Pajamas" value="pajamas" />
          <Picker.Item label="Socks" value="socks" />
          <Picker.Item label="Shoes" value="shoes" />
          <Picker.Item label="Coat" value="coat" />
          <Picker.Item label="Skirt" value="skirt" />
          <Picker.Item label="Suit" value="suit" />
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
