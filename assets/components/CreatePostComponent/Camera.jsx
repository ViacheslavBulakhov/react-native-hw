import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function CameraComponent({ setFormState }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setFormState((prevState) => ({ ...prevState, postPhoto: uri }));
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        <View style={styles.toggleCameraTypeBtnWrap}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.makePhotoBtnWrap}>
          <TouchableOpacity style={styles.makePhotoBtn} onPress={takePhoto}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleCameraTypeBtnWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  makePhotoBtnWrap: { position: "absolute" },
  makePhotoBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
