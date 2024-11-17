import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Tips_Rop() {
  const [selectedOption, setSelectedOption] = useState("camiseta");

  const recommendations = {
    camiseta: [
      "Donar la camiseta a organizaciones benéficas o centros de reciclaje.",
      "Reutilizarla para convertirla en un trapo de limpieza o para otros usos domésticos.",
      "Transformarla en un accesorio como una bolsa reutilizable.",
      "Reciclarla para crear nuevos productos textiles o prendas.",
      "Convertirla en una camiseta para niños, corta la parte inferior y cósela.",
      "Usarla como tela para hacer nuevos proyectos, como almohadas o cojines.",
      "Transformarla en una mascarilla o accesorio de moda.",
      "Venderla o intercambiarla en mercados de segunda mano o tiendas online.",
    ],
    pantalones: [
      "Si ya no los usas, donarlos a personas necesitadas o venderlos en tiendas de segunda mano.",
      "Reutilizarlos para crear otros accesorios, como mochilas o fundas.",
      "Usarlos como material para manualidades o proyectos de arte.",
      "Reciclaje textil: llevarlos a centros de reciclaje de ropa.",
      "Si el material lo permite, usarlos para hacer una bolsa de tela o mochila.",
      "Convertirlos en pantalones cortos o una falda de mezclilla.",
      "Donarlos a talleres de costura para proyectos de arte o moda.",
    ],
    vestido: [
      "Si ya no lo usas, donarlo a una organización benéfica o venderlo en tiendas de segunda mano.",
      "Transformarlo en una blusa o una falda reutilizando el material.",
      "Convertirlo en una bolsa de tela o accesorios como diademas o bufandas.",
      "Reciclarlo para hacer cojines, tapetes o otros artículos decorativos.",
      "Si es de buena calidad, puedes revenderlo en línea o en mercados de segunda mano.",
      "Reciclaje textil: llevarlo a un centro especializado.",
      "Reutilizarlo como tela para proyectos de arte o costura.",
    ],
    sudadera: [
      "Donar la sudadera a una organización benéfica o venderla en tiendas de segunda mano.",
      "Reutilizarla para hacer una manta o un cojín.",
      "Convertirla en una almohadilla para la oficina o el hogar.",
      "Transformarla en una bolsa o mochila, reutilizando la tela.",
      "Reutilizarla como tela para proyectos de costura o artesanía.",
      "Si está en buen estado, puedes venderla en línea o en mercados de segunda mano.",
      "Reciclarla a través de centros especializados en reciclaje textil.",
    ],
    pijama: [
      "Si está en buen estado, donar o vender el conjunto de pijama.",
      "Reutilizar la tela para hacer otros proyectos como fundas o cojines.",
      "Transformarlo en trapos para limpieza o utilizarlo para otros usos domésticos.",
      "Convertir la parte superior en una blusa o la parte inferior en pantalones cortos.",
      "Reciclarlo para proyectos de manualidades o arte.",
      "Si la tela es adecuada, reutilizarla para hacer una bolsa o mochila.",
      "Donar o intercambiar en mercados de segunda mano.",
    ],
    calcetines: [
      "Reutilizarlos como trapos para limpiar o hacer manualidades.",
      "Convertirlos en muñecos o juguetes para niños.",
      "Usarlos como material para proyectos de arte o costura.",
      "Donarlos si están en buen estado.",
      "Transformarlos en un bolso o accesorio de moda.",
      "Reciclar los calcetines a través de centros de reciclaje textil.",
    ],
    zapatos: [
      "Si están en buen estado, donar los zapatos a personas necesitadas.",
      "Venderlos en mercados de segunda mano o en línea.",
      "Reutilizarlos como material para proyectos de arte o manualidades.",
      "Reciclaje de zapatos: llevarlos a un centro especializado.",
      "Transformarlos en un accesorio, como una maceta decorativa o un colgante.",
    ],
    abrigo: [
      "Si está en buen estado, donar el abrigo a organizaciones benéficas o venderlo en tiendas de segunda mano.",
      "Reutilizar el material para hacer bolsas, mochilas o nuevos accesorios.",
      "Convertirlo en una manta o cobija para el hogar.",
      "Reciclaje textil: llevarlo a un centro especializado.",
      "Usarlo como tela para proyectos de costura o manualidades.",
      "Reutilizarlo para hacer fundas o protectores para muebles.",
    ],
    falda: [
      "Si está en buen estado, donar la falda o venderla en tiendas de segunda mano.",
      "Transformarla en una blusa o un top reutilizando la tela.",
      "Convertirla en una bolsa de tela o accesorios como diademas o bufandas.",
      "Reutilizarla como material para proyectos de costura o arte.",
      "Reciclarla en un centro especializado en reciclaje textil.",
    ],
    traje: [
      "Si está en buen estado, donar el traje o venderlo en tiendas de segunda mano.",
      "Transformarlo en una falda o una blusa, reutilizando la tela.",
      "Reciclarlo en proyectos de arte o costura.",
      "Donarlo a una organización benéfica para personas que lo necesiten.",
      "Reutilizarlo para hacer accesorios como mochilas o estuches.",
    ],
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selecciona un tipo de ropa para obtener recomendaciones personalizadas
      </Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={handleOptionChange}
        >
          <Picker.Item label="Camiseta" value="camiseta" />
          <Picker.Item label="Pantalones" value="pantalones" />
          <Picker.Item label="Vestido" value="vestido" />
          <Picker.Item label="Sudadera" value="sudadera" />
          <Picker.Item label="Pijama" value="pijama" />
          <Picker.Item label="Calcetines" value="calcetines" />
          <Picker.Item label="Zapatos" value="zapatos" />
          <Picker.Item label="Abrigo" value="abrigo" />
          <Picker.Item label="Falda" value="falda" />
          <Picker.Item label="Traje" value="traje" />
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

export default Tips_Rop;
