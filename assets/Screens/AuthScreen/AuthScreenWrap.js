import {
    StyleSheet,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";

  import { useFonts } from "expo-font";
  
  
  export default function AuthScreenWrap({ children}) {
    const [fontsLoaded] = useFonts({
      "Roboto-Regular": require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
      "Roboto-Bold": require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
      "DancingScript-VariableFont": require("../../../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    });
  
    if (!fontsLoaded) {
      return null;
    }

  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground
              source={require("../../images/PhotoBG.png")}
              resizeMode="cover"
              style={styles.image}
            >
                {children}
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    image: {
      flex: 1,
      justifyContent: "flex-end",
    },
  });