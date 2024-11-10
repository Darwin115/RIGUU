import { Button, View } from "react-native";

function Tus_Don({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',backgroundColor: '#9CDBA6'}}>
            <Button
            onPress={()=>navigation.navigate('Donations')}
            title="Go to Home"
            />
        </View>
    );
}
export default Tus_Don;