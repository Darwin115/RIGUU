import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useTranslation } from "react-i18next";

function Tips_Med() {
  const { t } = useTranslation();
  // Function to open links
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link: ", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("tips_med.title")}</Text>

      {/* Description of the screen's purpose */}
      <Text style={styles.description}>
        {t("tips_med.description")}     </Text>

      {/* Link 1: SINGREM */}
      <TouchableOpacity onPress={() => openLink("https://www.singrem.org.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>{t("tips_med.link1")}</Text>
      </TouchableOpacity>

      {/* Link 2: Gaceta UNAM */}
      <TouchableOpacity onPress={() => openLink("https://www.gaceta.unam.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>{t("tips_med.link2")}</Text>
      </TouchableOpacity>

      {/* Link 3: Código F */}
      <TouchableOpacity onPress={() => openLink("https://www.codigof.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>{t("tips_med.link3")}</Text>
      </TouchableOpacity>

      {/* Link 4: COFEPRIS */}
      <TouchableOpacity onPress={() => openLink("https://www.gob.mx/cofepris")} style={styles.linkButton}>
        <Text style={styles.linkText}>{t("tips_med.link4")}</Text>
      </TouchableOpacity>

      {/* Link 5: SEDEMA */}
      <TouchableOpacity onPress={() => openLink("https://www.sedema.cdmx.gob.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>{t("tips_med.link5")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CDBA6",
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#468585",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#468585",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  linkButton: {
    backgroundColor: "#50B498",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: "90%",
    elevation: 4, // Shadow for Android
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Tips_Med;
