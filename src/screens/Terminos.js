import { View, Text, StyleSheet } from "react-native";

function Terminos({ navigation }) {
  return (
    <View style={styles.container}>
    

      {/* Caja con el texto de los términos y condiciones */}
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          1. Aceptación: Al utilizar RIGUU, aceptas estos términos. Si no estás de acuerdo, no utilices la app.{"\n\n"}
          2. Uso de la aplicación: RIGUU es para uso personal, no comercial. Debes hacer un uso ético de la misma.{"\n\n"}
          3. Propiedad intelectual: Todo el contenido de RIGUU es propiedad de la app o de sus licenciantes. No puedes copiarlo sin permiso.{"\n\n"}
          4. Privacidad: RIGUU recopila datos de acuerdo con su política de privacidad. Tu información está protegida.{"\n\n"}
          5. Localización: La app puede utilizar tu ubicación para mostrarte centros de recogida cercanos.{"\n\n"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9CDBA6',
    padding: 20,
  },
  headerText: {
    fontSize: 28,  // Aumenté el tamaño de la fuente
    fontWeight: 'bold',
    color: '#468585',
    marginBottom: 20,
  },
  termsBox: {
    backgroundColor: '#468585', // Caja con fondo azul
    padding: 25,  // Mayor padding para hacer la caja más espaciosa
    borderRadius: 10,
    marginBottom: 20,
    width: '90%', // Ocupa un 90% del ancho de la pantalla
  },
  termsText: {
    fontSize: 20, // Aumenté el tamaño del texto
    color: '#fff', // Texto blanco
    textAlign: 'center', // Centra el texto dentro de la caja
  },
});

export default Terminos;
