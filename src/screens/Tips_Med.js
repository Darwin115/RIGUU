import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

function Tips_Med() {
  // Función para abrir enlaces
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir enlace: ", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reciclaje de Medicamentos en México</Text>

      {/* Descripción del propósito de la pantalla */}
      <Text style={styles.description}>
        A continuación, se presentan enlaces a diversos sitios web donde puedes obtener información sobre cómo desechar y reciclar medicamentos de forma segura y responsable.
      </Text>

      {/* Enlace 1: SINGREM */}
      <TouchableOpacity onPress={() => openLink("https://www.singrem.org.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>SINGREM - Gestión de Residuos de Medicamentos</Text>
      </TouchableOpacity>

      {/* Enlace 2: Gaceta UNAM */}
      <TouchableOpacity onPress={() => openLink("https://www.gaceta.unam.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>Gaceta UNAM - Riesgos de Medicamentos Caducos</Text>
      </TouchableOpacity>

      {/* Enlace 3: Código F */}
      <TouchableOpacity onPress={() => openLink("https://www.codigof.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>Código F - Manejo de Residuos Farmacéuticos</Text>
      </TouchableOpacity>

      {/* Enlace 4: COFEPRIS */}
      <TouchableOpacity onPress={() => openLink("https://www.gob.mx/cofepris")} style={styles.linkButton}>
        <Text style={styles.linkText}>COFEPRIS - Regulación y Deshecho Seguro</Text>
      </TouchableOpacity>

      {/* Enlace 5: SEDEMA */}
      <TouchableOpacity onPress={() => openLink("https://www.sedema.cdmx.gob.mx")} style={styles.linkButton}>
        <Text style={styles.linkText}>SEDEMA - Puntos de Recolección en CDMX</Text>
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
    elevation: 4, // Sombra para Android
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
