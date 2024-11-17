import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Icon, Pressable } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//Menus
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import TipsScreen from "./src/screens/TipsScreen";

// Donaciones
import D_Comida from "./src/screens/D_Comida";
import D_Ropa from "./src/screens/D_Ropa";
import D_Med from "./src/screens/D_Med";
import D_Elec from "./src/screens/D_Elec";
import Tus_Don from "./src/screens/Tus_Don";

// Tips
import Tips_Res from "./src/screens/Tips_Res";
import Tips_Rop from "./src/screens/Tips_Rop";
import Tips_Med from "./src/screens/Tips_Med";
import Tips_Elec from "./src/screens/Tips_Elec";

// Configuracion
import NotificationScreen from "./src/screens/NotificationScreen"; // Perfil
import Terminos from "./src/screens/Terminos";
import Guia from "./src/screens/guia";
import Contact from "./src/screens/Contact";
import Preguntas from "./src/screens/preguntas";
import Preg_1 from "./src/screens/Preg_1";
import Preg_2 from "./src/screens/Preg_2";
import Preg_3 from "./src/screens/Preg_3";
import Preg_4 from "./src/screens/Preg_4";


// Login

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
// ----------------------------------------------------------------------------------------
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>


<Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />



<Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Register",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />



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

      <Stack.Screen
        name="Noti"
        component={NotificationScreen}
        options={{
          title: "User Profile",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Comida"
        component={D_Comida}
        options={{
          title: "Food",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Ropa"
        component={D_Ropa}
        options={{
          title: "Clothing",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Medicina"
        component={D_Med}
        options={{
          title: "Medicine",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Electrónicos"
        component={D_Elec}
        options={{
          title: "Electronics",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Tus Donaciones"
        component={Tus_Don}
        options={{
          title: "Your donations",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Tips Comida"
        component={Tips_Res}
        options={{
          title: "Tips Comida",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Tips Ropa"
        component={Tips_Rop}
        options={{
          title: "Tips Ropa",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Tips Medicinas"
        component={Tips_Med}
        options={{
          title: "Tips Medicinas",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Tips Electrónicos"
        component={Tips_Elec}
        options={{
          title: "Tips Electrónicos",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Términos y Condiciones"
        component={Terminos}
        options={{
          title: "Términos y Condiciones",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Guía rápida"
        component={Guia}
        options={{
          title: "Guía rápida",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Preguntas frecuentes"
        component={Preguntas}
        options={{
          title: "Preguntas frecuentes",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Pregunta 1"
        component={Preg_1}
        options={{
          title: "Pregunta 1",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Pregunta 2"
        component={Preg_2}
        options={{
          title: "Pregunta 2",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Pregunta 3"
        component={Preg_3}
        options={{
          title: "Pregunta 3",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />

      <Stack.Screen
        name="Pregunta 4"
        component={Preg_4}
        options={{
          title: "Pregunta 4",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />
      <Stack.Screen
        name="Contacto"
        component={Contact}
        options={{
          title: "Contacto",
          headerStyle: { backgroundColor: "#468585" },
          headerTintColor: "#fff",
          headerTitleAlign: "center", // Centra el título en el header
        }}
      />
    </Stack.Navigator>
  );
}

// -----------------------------------------------------------------------------------------------------

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
            iconName = focused
              ? "extension-puzzle"
              : "extension-puzzle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Icon as={Ionicons} name={iconName} size={size} color="white" />
          );
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
