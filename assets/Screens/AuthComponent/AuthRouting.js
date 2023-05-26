import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../AuthComponent/LoginScreen/LoginScreen";
import RegistrationScreen from "../AuthComponent/RegistrationScreen/RegistrationScreen";

const AuthStack = createStackNavigator();

export default function AuthRouting({ setIsLoggedIn }) {
  return (
    <AuthStack.Navigator>
  <AuthStack.Screen
    options={{ headerShown: false }}
    name="Registration"
  >
    {(props) => <RegistrationScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
  </AuthStack.Screen>
  <AuthStack.Screen
    options={{ headerShown: false }}
    name="Login"
  >
    {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
  </AuthStack.Screen>
</AuthStack.Navigator>
  );
}