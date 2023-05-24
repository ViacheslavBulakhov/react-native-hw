import { useState } from "react";
import LoginScreen from "./assets/Screens/AuthScreen/LoginScreen/LoginScreen";
import RegistrationScreen from "./assets/Screens/AuthScreen/RegistrationScreen/RegistrationScreen";

import AuthScreenWrap from "./assets/Screens/AuthScreen/AuthScreenWrap";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);


  return (
    <AuthScreenWrap>
    {isRegistered ? (
        <LoginScreen selectScreen={setIsRegistered} />
      ) : (
        <RegistrationScreen selectScreen={setIsRegistered} />
      )}
    </AuthScreenWrap> 
  );
}
