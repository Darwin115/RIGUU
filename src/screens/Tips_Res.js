import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, VStack, HStack } from 'native-base';
import { useTranslation } from 'react-i18next';

function Tips_Rec() {
  const { t } = useTranslation();
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [recipe, setRecipe] = useState("");

  const recipes = {
    "Carne-Papas": t("tips_recipes.recipes.Carne-Papas"),
    "Carne-Arroz": t("tips_recipes.recipes.Carne-Arroz"),
    "Carne-Frijoles": t("tips_recipes.recipes.Carne-Frijoles"),
    "Carne-Verduras": t("tips_recipes.recipes.Carne-Verduras"),
    "Pollo-Papas": t("tips_recipes.recipes.Pollo-Papas"),
    "Pollo-Verduras": t("tips_recipes.recipes.Pollo-Verduras"),
    "Pollo-Arroz": t("tips_recipes.recipes.Pollo-Arroz"),
    "Huevo-Papas": t("tips_recipes.recipes.Huevo-Papas"),
    "Huevo-Frijoles": t("tips_recipes.recipes.Huevo-Frijoles"),
    "Huevo-Arroz": t("tips_recipes.recipes.Huevo-Arroz"),
    "Huevo-Verduras": t("tips_recipes.recipes.Huevo-Verduras"),
    "Queso-Verduras": t("tips_recipes.recipes.Queso-Verduras"),
    "Queso-Papas": t("tips_recipes.recipes.Queso-Papas"),
    "Queso-Arroz": t("tips_recipes.recipes.Queso-Arroz"),
    "Queso-Frijoles": t("tips_recipes.recipes.Queso-Frijoles"),
    "Pescado-Verduras": t("tips_recipes.recipes.Pescado-Verduras"),
    "Pescado-Arroz": t("tips_recipes.recipes.Pescado-Arroz"),
    "Pescado-Papas": t("tips_recipes.recipes.Pescado-Papas"),
  };

  const handleRecipe = () => {
    const key = `${firstChoice}-${secondChoice}`;
    setRecipe(recipes[key] || t("tips_recipes.no_recipe_found"));
  };

  return (
    <View style={styles.container}>
      <VStack space={4} alignItems="center" style={styles.content}>
        <Text style={styles.subtitle}>{t("tips_recipes.select_first_food")}</Text>
        <HStack space={3} justifyContent="center">
          {["Pescado", "Carne", "Pollo", "Huevo", "Queso"].map((item) => (
            <Button
              key={item}
              onPress={() => setFirstChoice(item)}
              variant={firstChoice === item ? "solid" : "outline"}
              colorScheme="teal"
              style={[
                styles.button,
                firstChoice === item && styles.selectedButton,
              ]}
              _pressed={{
                bg: "#248277", // Fondo más oscuro cuando se presiona
                _text: { color: "#fff" }, // Texto blanco
              }}
            >
              {t(`tips_recipes.food_options.${item}`)}
            </Button>
          ))}
        </HStack>

        <Text style={styles.subtitle}>{t("tips_recipes.select_second_food")}</Text>
        <HStack space={3} justifyContent="center">
          {["Papas", "Frijoles", "Arroz", "Verduras"].map((item) => (
            <Button
              key={item}
              onPress={() => setSecondChoice(item)}
              variant={secondChoice === item ? "solid" : "outline"}
              colorScheme="teal"
              style={[
                styles.button,
                secondChoice === item && styles.selectedButton,
              ]}
              _pressed={{
                bg: "#248277", // Fondo más oscuro cuando se presiona
                _text: { color: "#fff" }, // Texto blanco
              }}
            >
              {t(`tips_recipes.food_options.${item}`)}
            </Button>
          ))}
        </HStack>

        <Button onPress={handleRecipe} colorScheme="cyan" mt={4} style={styles.actionButton}>
          {t("tips_recipes.get_recipe")}
        </Button>

        {recipe ? (
          <Text style={styles.recipe}>
            {t("tips_recipes.suggested_recipe")} {recipe}
          </Text>
        ) : null}
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFF9CC", // Fondo verde claro
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A4A4A", // Gris oscuro
  },
  button: {
    minWidth: 60,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  selectedButton: {
    backgroundColor: "#2A9D8F", // Fondo verde oscuro cuando está seleccionado
    borderColor: "#2A9D8F",
  },
  actionButton: {
    minWidth: 200,
    justifyContent: "center",
    borderRadius: 20,
  },
  recipe: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#2A9D8F", // Verde más fuerte
  },
});

export default Tips_Rec;
