import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useState, useEffect } from "react";

const defaultFromState = {
  email: "",
  password: "",
};

export default function LoginScreen({ selectScreen, fontConfig }) {
  const [formState, setFormState] = useState(defaultFromState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isPasswordWisible, setIsPasswordWisible] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onSubmit = () => {
    console.log("Дані з форми", formState);
    setFormState(defaultFromState);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formWrap}>
              <Text style={styles.formTitle}>Войти</Text>

              <View
                style={styles.formInputWrap}
                onFocus={() => setIsKeyboardOpen(true)}
              >
                <TextInput
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Адрес электронной почты"
                  value={formState.email}
                  keyboardType={"email-address"}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, styles.passwordInput]}
                    placeholder="Пароль"
                    placeholderTextColor={"#BDBDBD"}
                    value={formState.password}
                    maxLength={12}
                    secureTextEntry={isPasswordWisible}
                    onChangeText={(value) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Feather
                    name={isPasswordWisible ? "eye-off" : "eye"}
                    style={styles.passwordIcon}
                    size={24}
                    color="#999"
                    onPress={() =>
                      setIsPasswordWisible((prevState) => !prevState)
                    }
                  />
                </View>
              </View>
              {!isKeyboardOpen && (
                <>
                  <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                    <Text style={{ color: "#fff" }}>Войти</Text>
                  </TouchableOpacity>
                  <Text style={{ fontFamily: "Roboto-Regular" }}>
                    Нет аккаунта?
                    <Text
                      onPress={() => {
                        selectScreen((state) => !state);
                      }}
                      style={{ fontFamily: "Roboto-Regular" }}
                    >
                      Зарегистрироваться
                    </Text>
                  </Text>
                </>
              )}
            </View>





    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.container}>
    //       <ImageBackground
    //         source={require("../../images/PhotoBG.png")}
    //         resizeMode="cover"
    //         style={styles.image}
    //       >
    //         <View style={styles.formWrap}>
    //           <Text style={styles.formTitle}>Войти</Text>

    //           <View
    //             style={styles.formInputWrap}
    //             onFocus={() => setIsKeyboardOpen(true)}
    //           >
    //             <TextInput
    //               style={styles.input}
    //               placeholderTextColor={"#BDBDBD"}
    //               placeholder="Адрес электронной почты"
    //               value={formState.email}
    //               keyboardType={"email-address"}
    //               onChangeText={(value) =>
    //                 setFormState((prevState) => ({
    //                   ...prevState,
    //                   email: value,
    //                 }))
    //               }
    //             />
    //             <View style={styles.passwordContainer}>
    //               <TextInput
    //                 style={[styles.input, styles.passwordInput]}
    //                 placeholder="Пароль"
    //                 placeholderTextColor={"#BDBDBD"}
    //                 value={formState.password}
    //                 maxLength={12}
    //                 secureTextEntry={isPasswordWisible}
    //                 onChangeText={(value) =>
    //                   setFormState((prevState) => ({
    //                     ...prevState,
    //                     password: value,
    //                   }))
    //                 }
    //               />
    //               <Feather
    //                 name={isPasswordWisible ? "eye-off" : "eye"}
    //                 style={styles.passwordIcon}
    //                 size={24}
    //                 color="#999"
    //                 onPress={() =>
    //                   setIsPasswordWisible((prevState) => !prevState)
    //                 }
    //               />
    //             </View>
    //           </View>
    //           {!isKeyboardOpen && (
    //             <>
    //               <TouchableOpacity style={styles.btn} onPress={onSubmit}>
    //                 <Text style={{ color: "#fff" }}>Войти</Text>
    //               </TouchableOpacity>
    //               <Text style={{ fontFamily: "Roboto-Regular" }}>
    //                 Нет аккаунта?
    //                 <Text
    //                   onPress={() => {
    //                     selectScreen((state) => !state);
    //                   }}
    //                   style={{ fontFamily: "Roboto-Regular" }}
    //                 >
    //                   Зарегистрироваться
    //                 </Text>
    //               </Text>
    //             </>
    //           )}
    //         </View>
    //       </ImageBackground>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
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

  formWrap: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 78,
    paddingTop: 32,
  },
  input: {
    height: 50,
    paddingLeft: 16,

    backgroundColor: "#F6F6F6",
    color: "#212121",

    borderWidth: 1,
    borderRadius: 8,

    borderColor: "#E8E8E8",
    marginHorizontal: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  passwordIcon: {
    position: "absolute",
    right: 30,
  },

  formInputWrap: {
    gap: 16,
    width: "100%",
    marginTop: 32,
  },
  formTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },
  btn: {
    marginTop: 43,
    backgroundColor: "#FF6C00",

    paddingHorizontal: 32,
    paddingVertical: 16,

    borderRadius: 100,
    marginBottom: 16,
  },
});
