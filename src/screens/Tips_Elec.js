import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Tips_Elec() {
  const [selectedOption, setSelectedOption] = useState("telefono");

  const recommendations = {
    telefono: [
      "Donar el teléfono a personas que lo necesiten o a organizaciones benéficas.",
      "Reciclar el teléfono a través de un centro especializado.",
      "Venderlo en línea o en mercados de segunda mano.",
      "Reutilizarlo como teléfono de repuesto o para proyectos de bricolaje.",
      "Donar partes del teléfono, como la batería o pantalla, a talleres de reparación.",
      "Convertirlo en una cámara de seguridad o en un dispositivo de monitoreo.",
      "Reciclar sus componentes como metales y plásticos a través de programas de reciclaje.",
    ],
    laptop: [
      "Si está en buen estado, donar la laptop a una organización o venderla en tiendas de segunda mano.",
      "Reutilizarla para proyectos de tecnología o educación.",
      "Reciclarla en un centro especializado en dispositivos electrónicos.",
      "Venderla a través de plataformas en línea o tiendas locales.",
      "Usarla como un centro de entretenimiento para la casa o para niños.",
      "Donar accesorios como teclados y cargadores a quienes lo necesiten.",
    ],
    tablet: [
      "Donar la tablet a una persona que la necesite o a una institución educativa.",
      "Reciclarla adecuadamente en un centro de reciclaje especializado.",
      "Reutilizarla como lector de libros electrónicos o en proyectos educativos.",
      "Convertirla en una herramienta de entretenimiento o para control de domótica.",
      "Venderla en mercados de segunda mano o en plataformas de compra-venta.",
      "Usarla como dispositivo de música o en proyectos de arte digital.",
    ],
    televisor: [
      "Donar el televisor a una organización benéfica o venderlo a través de segunda mano.",
      "Reutilizarlo como monitor para la computadora o para juegos.",
      "Reciclarlo en centros especializados para la correcta disposición de sus partes.",
      "Vender partes del televisor, como la pantalla o los componentes electrónicos.",
      "Convertirlo en un proyecto DIY, como un cuadro interactivo o una pantalla informativa.",
    ],
    auriculares: [
      "Si están en buen estado, donar los auriculares o venderlos de segunda mano.",
      "Reutilizarlos para proyectos de sonido o en reparaciones de otros dispositivos.",
      "Reciclar los componentes electrónicos en un centro especializado.",
      "Reutilizar las piezas para hacer accesorios de moda o decoración.",
      "Vender partes como cables o almohadillas para otros dispositivos.",
    ],
    camara: [
      "Donar la cámara a una institución educativa o a un fotógrafo que lo necesite.",
      "Vender la cámara a través de plataformas de segunda mano.",
      "Reciclarla a través de programas especializados en la electrónica.",
      "Reutilizarla para proyectos de grabación o fotografía en casa.",
      "Usarla para vigilancia doméstica o en eventos de monitoreo.",
    ],
    consola: [
      "Si está en buen estado, donar la consola a quienes no tengan acceso a una.",
      "Venderla en mercados de segunda mano o en línea.",
      "Reciclarla en un centro especializado en dispositivos electrónicos.",
      "Reutilizarla para organizar un centro de entretenimiento o para videojuegos retro.",
      "Intercambiarla en tiendas de videojuegos o en plataformas en línea.",
    ],
    reloj_inteligente: [
      "Donar el reloj a una persona que lo necesite o venderlo de segunda mano.",
      "Reutilizarlo para proyectos de salud o monitoreo personal.",
      "Reciclarlo a través de un centro especializado en dispositivos electrónicos.",
      "Vender partes como las correas o la batería para su reutilización.",
      "Convertirlo en un accesorio de moda o regalarlo como parte de un kit de salud.",
    ],
    router: [
      "Si ya no se usa, donarlo a una organización que lo necesite.",
      "Reciclarlo adecuadamente en un centro especializado en tecnología.",
      "Reutilizarlo como punto de acceso Wi-Fi en otra área de la casa o en una oficina.",
      "Venderlo si está en buen estado a través de plataformas en línea.",
      "Desmontarlo para proyectos de tecnología o reparaciones.",
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selecciona un tipo de aparato electrónico para obtener recomendaciones personalizadas
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label="Teléfono" value="telefono" />
          <Picker.Item label="Laptop" value="laptop" />
          <Picker.Item label="Tablet" value="tablet" />
          <Picker.Item label="Televisor" value="televisor" />
          <Picker.Item label="Auriculares" value="auriculares" />
          <Picker.Item label="Cámara" value="camara" />
          <Picker.Item label="Consola" value="consola" />
          <Picker.Item label="Reloj Inteligente" value="reloj_inteligente" />
          <Picker.Item label="Router" value="router" />
        </Picker>
      </View>

      <Text style={styles.subtitle}>
        Recomendaciones para {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
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
          <Text style={styles.recommendation}>No hay recomendaciones disponibles para esta opción.</Text>
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
    color: "#FFFFFF", // Subtítulo en blanco
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
    backgroundColor: "#468585", // Fondo blanco para cada recomendación
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd", // Bordes grises para separar las recomendaciones
  },
  recommendation: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});

export default Tips_Elec;
