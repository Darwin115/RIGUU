import { Button, View } from "react-native";

function Login({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',backgroundColor: '#9CDBA6'}}>
            <Button
            onPress={()=>navigation.navigate('Donations')}
            title="Go to Home"
            />
        </View>
    );
}
export default Login;