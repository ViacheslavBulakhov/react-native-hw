import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function PhotoWrap({ uri }) {
  return (
    <ImageBackground source={{ uri }} resizeMode="cover" style={styles.image}>
      <TouchableOpacity style={styles.makePhotoBtnWrap} onPress={() => {}}>
        <FontAwesome name="camera" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  makePhotoBtnWrap: {
    width: 60,
    height: 60,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    borderRadius: 30,
  },
});
