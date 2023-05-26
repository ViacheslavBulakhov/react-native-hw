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
  } from "react-native";
  
  import { Feather,FontAwesome } from "@expo/vector-icons";
  import * as ImagePicker from "expo-image-picker";
  import { useState, useEffect } from "react";
  
  
  const defaultFromState = {
    description: "",
    location: "",
    postPhoto: null,
  };
  
  export default function CreatePostsScreen() {
    const [formState, setFormState] = useState(defaultFromState);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  
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
        setFormState((prevState)=> ({...prevState, postPhoto: result.uri}));
      }
    };
  
    const onSubmit = () => {
      console.log("Дані з форми", formState);
      setFormState(defaultFromState);
      Keyboard.dismiss();
    };
  

    const isFormFull = formState.description && 
    formState.location &&
    formState.postPhoto;

  const submitButtonStyles =  {...styles.sendButton,
    backgroundColor:  isFormFull ? "#FF6C00" : "#F6F6F6", 
    };

    return (  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={
                styles.formContainer
              }
            >

            <View  style={styles.postPhoto}>
            {formState.postPhoto && (
                  <Image style={styles.profilePhoto} source={{ uri: formState.postPhoto }} />
                )}


                <TouchableOpacity  onPress={pickImage} style={styles.postPhotoButton}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                
            </View>
            {formState.postPhoto ? 
            <Text style={styles.text}>Редагувати фото</Text> 
            : <Text style={styles.text}>Завантажте фото</Text>}

              <TextInput
                placeholder="Назва"
                onChangeText={(value) =>
                  setFormState((prevState) => ({ ...prevState, description: value }))
                }
                value={formState.description}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
              <TextInput
                placeholder="Місцевість"
                onChangeText={(value) =>
                  setFormState((prevState) => ({ ...prevState, location: value }))
                }
                value={formState.location}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
            </View>
          </KeyboardAvoidingView>
  
          <TouchableOpacity style={submitButtonStyles} onPress={()=> console.log("send post")}>
            <Text style={{...styles.sendButtonText, color :  isFormFull ? "#FFFFFF" :  "#BDBDBD" }}> Опублікувати </Text>
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
    },})