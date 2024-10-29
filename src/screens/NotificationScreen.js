import { Button, View } from "react-native";

function NotificationScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',backgroundColor: 'blue'}}>
            <Button
            onPress={()=>navigation.navigate('Donations')}
            title="Go to Home"
            />
        </View>
    );
}
export default NotificationScreen;