import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";

import { useState, useEffect } from "react";
import CameraComponent from "../../../components/CreatePostComponent/Camera";
import PhotoWrap from "../../../components/CreatePostComponent/PhotoWrap";

const defaultFromState = {
  description: "",
  location: "",
  postPhoto: null,
  coordinates: null,
};

export default function CreatePostsScreen({ navigation }) {
  const [formState, setFormState] = useState(defaultFromState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      const cityName = await Location.reverseGeocodeAsync(coords);
      const locationName = `${cityName[0].city}, ${cityName[0].country}`;

      setFormState((prevState) => ({
        ...prevState,
        coordinates: { ...coords },
        location: locationName,
      }));
    })();
  }, []);

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

  const onSubmit = async () => {
    console.log("Дані з форми", formState);
    navigation.navigate("PostsScreen");
    setFormState(defaultFromState);
    Keyboard.dismiss();
  };

  const isFormFull =
    formState.description && formState.location && formState.postPhoto;

  const submitButtonStyles = {
    ...styles.sendButton,
    backgroundColor: isFormFull ? "#FF6C00" : "#F6F6F6",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formContainer}>
              <View style={styles.postPhoto}>
                {formState.postPhoto ? (
                  <PhotoWrap uri={formState.postPhoto} />
                ) : (
                  <CameraComponent setFormState={setFormState} />
                )}
              </View>

              {formState.postPhoto ? (
                <Text style={styles.text}>Редагувати фото</Text>
              ) : (
                <Text style={styles.text}>Завантажте фото</Text>
              )}

              <TextInput
                placeholder="Назва"
                onChangeText={(value) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    description: value,
                  }))
                }
                value={formState.description}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
              <TextInput
                placeholder="Місцевість"
                onChangeText={(value) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    location: value,
                  }))
                }
                value={formState.location}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={submitButtonStyles} onPress={onSubmit}>
            <Text
              style={{
                ...styles.sendButtonText,
                color: isFormFull ? "#FFFFFF" : "#BDBDBD",
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>

          {!isKeyboardOpen && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setFormState(defaultFromState)}
            >
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: "Roboto-Regular",
    backgroundColor: "#FFFFFF",
  },
  postPhoto: {
    height: 240,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },

  photoContainer: {
    position: "absolute",
    height: 240,
  },
  photo: {
    height: 240,
  },

  postPhotoButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    marginTop: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  sendButtonText: {
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    marginTop: 8,
    color: "#BDBDBD",
    lineHeight: 19,
    fontSize: 16,
  },
  formContainer: {
    marginTop: 32,
    display: "flex",
    gap: 16,
  },
  input: {
    justifyContent: "center",
    height: 50,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontFamily: "Roboto-Regular",
  },
  placeholder: {
    color: "#BDBDBD",
    lineHeight: 19,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  deleteButton: {
    marginBottom: 34,
    marginTop: "auto",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
