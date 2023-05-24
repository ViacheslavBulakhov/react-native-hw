import { useState} from "react";
import LoginScreen from "./assets/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./assets/Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import AuthWrap from "./assets/Screens/AuthComponent/AuthWrap/AuthWrap";

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

  return (
    <AuthWrap>
            {isRegistered ? (
         <LoginScreen selectScreen={setIsRegistered} />
       ) : (
         <RegistrationScreen selectScreen={setIsRegistered} />
       )}
    </AuthWrap>
  );
}
