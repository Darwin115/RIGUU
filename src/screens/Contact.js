import { Button, View, FlatList, Text, TouchableOpacity } from "react-native"; 
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons

function Cont({navigation}) {
  const data = [
    { id: '1', title: '123456789', icon: 'call' }, // Teléfono de ejemplo
    { id: '2', title: 'usuario@mail.com', icon: 'mail' }, // Correo de ejemplo
    { id: '3', title: 'Calle Falsa 123', icon: 'location-outline' }, // Ubicación de ejemplo
    { id: '4', title: 'facebook.com/usuario', icon: 'logo-facebook' }, // Facebook de ejemplo
    { id: '5', title: '+1234567890', icon: 'logo-whatsapp' }, // WhatsApp de ejemplo
  ];

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9CDBA6'}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              marginBottom: 30, // Aumentamos el margen entre los ítems
              justifyContent: 'center' // Centra los íconos y el texto
            }}
            onPress={() => console.log(`${item.title} pressed`)} // Acción al presionar
          >
            <Ionicons
              name={item.icon} // Ícono según cada item
              size={48} // Tamaño del ícono
              color="white" // Color del ícono
              style={{ marginRight: 15 }} // Espaciado entre ícono y texto
            />
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}> {/* Texto más grande y blanco */}
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ 
          alignItems: 'center', // Centra el contenido de la lista
          justifyContent: 'center', // Asegura que los elementos estén centrados en la pantalla
          flex: 1 // Ocupa todo el espacio disponible
        }} 
      />
     
    </View>
  );
}

export default Cont;
