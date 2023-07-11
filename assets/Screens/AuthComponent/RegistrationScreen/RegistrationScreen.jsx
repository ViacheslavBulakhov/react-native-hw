import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

import { Feather, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";

const defaultFromState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation, setIsLoggedIn }) {
  const [formState, setFormState] = useState(defaultFromState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isPasswordWisible, setIsPasswordWisible] = useState(true);
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {
    console.log("Дані з форми", formState);
    setIsLoggedIn((prevState) => !prevState);
    setFormState(defaultFromState);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../images/PhotoBG.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.formWrap}>
              <View style={styles.profilePhotoWrap}>
                {image && (
                  <Image style={styles.profilePhoto} source={{ uri: image }} />
                )}
                <TouchableOpacity style={styles.button}>
                  {image ? (
                    <AntDesign
                      name="closecircleo"
                      size={24}
                      color="black"
                      onPress={() => setImage(null)}
                    />
                  ) : (
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color="black"
                      onPress={pickImage}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.formTitle}>Регистрация</Text>
              <View
                style={styles.formInputWrap}
                onFocus={() => setIsKeyboardOpen(true)}
              >
                <TextInput
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Логин"
                  value={formState.login}
                  maxLength={16}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />
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
                    <Text style={{ color: "#fff", fontFamily: "Roboto-Bold" }}>
                      Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ fontFamily: "Roboto-Regular" }}>
                    Уже есть аккаунт?
                    <Text
                      onPress={() => navigation.navigate("Login")}
                      style={{ fontFamily: "Roboto-Regular" }}
                    >
                      Войти
                    </Text>
                  </Text>
                </>
              )}
            </View>
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
  profilePhotoWrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  button: {
    width: 24,
    alignItems: "center",
    position: "absolute",
    right: -12,
    bottom: 14,
  },

  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  formWrap: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 78,
    paddingTop: 92,
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
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 500,
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
