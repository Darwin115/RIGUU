import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Para seleccionar idioma
import { Ionicons } from "@expo/vector-icons"; // Importar los íconos
import { useTranslation } from "react-i18next";

function SettingsScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Noti")}
      >
        <Text style={styles.buttonText}>{t("settings.profile")}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Términos y Condiciones")}
      >
        <Text style={styles.buttonText}>{t("settings.terms")}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Guía rápida")}
      >
        <Text style={styles.buttonText}>{t("settings.guide")}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Preguntas frecuentes")}
      >
        <Text style={styles.buttonText}>{t("settings.faq")}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Contacto")}
      >
        <Text style={styles.buttonText}>{t("settings.contact")}</Text>
      </TouchableOpacity>

      {/* Botón de Logout con ícono */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Ionicons
          name="log-out-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{t("settings.logout")}</Text>
      </TouchableOpacity>

      {/* Selector de idioma */}
      <View style={styles.languageSelector}>
        <Text style={styles.languageLabel}>{t("settings.language")}</Text>
        <Picker
          selectedValue={selectedLanguage}
          style={styles.picker}
          onValueChange={changeLanguage}
        >
          <Picker.Item label={t("settings.english")} value="en" />
          <Picker.Item label={t("settings.spanish")} value="es" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CDBA6",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: "#50B498",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
  languageSelector: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "#50B498",
    borderRadius: 10,
    padding: 10,
  },
  languageLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#fff",
    backgroundColor: "#50B498",
  },
});

export default SettingsScreen;

