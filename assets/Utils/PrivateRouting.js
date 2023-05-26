import AuthRouting from "../Screens/AuthComponent/AuthRouting";
import Home from "../Screens/HomeScreen/HomeScreen";

export default function PrivateRouting({isLoggedIn,setIsLoggedIn}) {
    return isLoggedIn ?  <Home setIsLoggedIn={setIsLoggedIn} /> 
    : <AuthRouting setIsLoggedIn={setIsLoggedIn} />
    
};
