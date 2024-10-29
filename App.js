import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import TipsScreen from "./src/screens/TipsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          title: "Tips",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />
      <Stack.Screen
        name="Noti"
        component={NotificationScreen}
        options={{
          title: "Noti",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />
    </Stack.Navigator>
  );
}


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#468585" }, // Aplica el color al header del Tab.Navigator
        headerTintColor: "#fff", // Color del texto en el header
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#50B498",
              margin: 5,
              borderRadius: 15,
              paddingVertical: 15, // Aumenta el alto
              paddingHorizontal: 10, // Aumenta el ancho
            }}
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 30; // Aumenta el tamaño del ícono

          if (route.name === "Donations") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "extension-puzzle" : "extension-puzzle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color="white" />;
        },
        tabBarLabelStyle: {
          fontSize: 14, // Aumenta el tamaño de la fuente
          color: "white",
        },
        tabBarStyle: {
          height: 100, // Aumenta la altura de la barra
          borderTopWidth: 0,
          backgroundColor: "#9CDBA6",
        },
      })}
    >
      <Tab.Screen
        name="Donations"
        component={HomeScreen}
        options={{ title: "Donations" }}
      />
      <Tab.Screen
        name="Notification"
        component={TipsScreen}
        options={{ title: "Tips and recipes" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}




