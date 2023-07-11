import "react-native-gesture-handler";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

import { useState } from "react";

import PrivateRouting from "./assets/Utils/PrivateRouting";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "DancingScript-VariableFont": require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PrivateRouting isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </NavigationContainer>
  );
}
