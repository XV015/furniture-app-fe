import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetail from './screens/ProductDetail';
import NewRivals from './screens/NewRivals';


const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView=useCallback(async() =>{
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom Navigator' component={BottomTabNavigation}
        options={{
          headerShown: false
        }}
        /><Stack.Screen name='Cart' component={Cart}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name='ProductDetail' component={ProductDetail}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name='ProductList' component={NewRivals}
        options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

