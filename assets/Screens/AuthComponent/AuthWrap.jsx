// import {
//     StyleSheet,
//     View,
//     ImageBackground,
//     KeyboardAvoidingView,
//     TouchableWithoutFeedback,
//     Keyboard,
//   } from "react-native";

//   export default function AuthWrap({children}) {
  
//     return (
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.container}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={styles.container}>
//             <ImageBackground
//               source={require("../../images/PhotoBG.png")}
//               resizeMode="cover"
//               style={styles.image}
//             >
//                 {children}
//             </ImageBackground>
//           </View>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     );
//   }
  
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
  