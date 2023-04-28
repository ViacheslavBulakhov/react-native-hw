import { useState, useEffect } from "react";
import LoginScreen from "./assets/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./assets/Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "DancingScript-VariableFont": require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // const fontConfig = {
  //   regular: { fontFamily: "Roboto-Regular" },
  //   bold: { fontFamily: "Roboto-Bold" },
  //   dancing: { fontFamily: "DancingScript-VariableFont" },
  // };

  return (
    <>
      {isRegistered ? (
        <LoginScreen selectScreen={setIsRegistered} />
      ) : (
        <RegistrationScreen selectScreen={setIsRegistered} />
      )}
    </>
  );
}
