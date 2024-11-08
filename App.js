import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Icon, Pressable } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
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
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
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
        headerStyle: { backgroundColor: "#468585" },
        headerTintColor: "#fff",
        tabBarButton: (props) => (
          <Pressable
            {...props}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#50B498",
              margin: 5,
              borderRadius: 15,
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 30;

          if (route.name === "Donations") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Tips") {
            iconName = focused ? "extension-puzzle" : "extension-puzzle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Icon as={Ionicons} name={iconName} size={size} color="white" />;
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: "white",
        },
        tabBarStyle: {
          height: 100,
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
        name="Tips"
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
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
