import { Button, View, FlatList, Text, TouchableOpacity, Linking } from "react-native"; 
import { Ionicons } from '@expo/vector-icons';

function Cont({navigation}) {
  const data = [
    { id: '1', title: '+52 1 449 290 5275', icon: 'call', url: 'tel:+52 1 449 290 5275' },
    { id: '2', title: 'RIGUU@mail.com', icon: 'mail', url: 'mailto:RIGUU@mail.com' },
    { id: '3', title: 'AV López Mateos 1801', icon: 'location-outline', url: 'geo:21.8852,-102.2918?q=Avenida+Adolfo+López+Mateos+1801,+Aguascalientes' }, // Dirección del ITA
    { id: '4', title: 'facebook.com/RIGUU', icon: 'logo-facebook', url: 'fb://page/RIGUU' },
    { id: '5', title: '+52 1 449 290 5275', icon: 'logo-whatsapp', url: 'whatsapp://send?phone=+52 1 449 290 5275' },
  ];

  const handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  };

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9CDBA6'}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              marginBottom: 30,
              justifyContent: 'center' 
            }}
            onPress={() => handlePress(item.url)} // Redirige a la URL correspondiente
          >
            <Ionicons
              name={item.icon}
              size={48}
              color="white"
              style={{ marginRight: 15 }}
            />
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ 
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }} 
      />
    </View>
  );
}

export default Cont;
