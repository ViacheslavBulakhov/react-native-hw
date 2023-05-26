import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    KeyboardAvoidingView,
    ImageBackground
  } from "react-native";
  
  import { Feather, AntDesign } from "@expo/vector-icons";
  import * as ImagePicker from "expo-image-picker";
  import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import ProfilePostCard from "../../../components/ProfilePostCard";
  
  
  export default function ProfileScreen({ setIsLoggedIn}) {
    const [image, setImage] = useState(null);
  
  
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


    const data = [{description: "lis", comments: [1,2], location: "qwerety"},
    {description: "lis", comments: [1,2], location: "qwerety"},
    {description: "lis", comments: [1,2], location: "qwerety"}];

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
             <Feather name="log-out" size={24} color="black" style={styles.logOut} onPress={()=> setIsLoggedIn((state)=>!state)}/>
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

              <Text style={styles.formTitle}>USER NAME</Text>

              <FlatList
                data={data}
                renderItem={({ item }) =><ProfilePostCard post={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />

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
    logOut:{
      position:"absolute",
      right:16,
      top:22,
      color:"#BDBDBD"
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
        marginTop:147,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
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
  