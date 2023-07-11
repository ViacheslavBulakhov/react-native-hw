import { FlatList, TextInput } from "react-native-gesture-handler";
import CommentsCard from "../../../../components/CommentsCard";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");
  const imageUri = null;
  const post = [1, 2, 2];
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 16,
        backgroundColor: "#ffffff",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View style={styles.postPhotoWrap}>
        {imageUri && <Image source={{ uri: imageUri }} style={{}} />}
      </View>

      <FlatList
        data={post}
        renderItem={({ item }) => <CommentsCard post={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ position: "relative", marginTop: 31 }}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"#BDBDBD"}
          placeholder="Коментувати..."
          value={comment}
          onChangeText={(value) => setComment(value)}
        />
        <View style={styles.iconWrap}>
          <AntDesign name="arrowup" color="white" size={14} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  postPhotoWrap: {
    width: 343,
    height: 240,
    borderRadius: 16,
    backgroundColor: "red",
    owerflow: "hidden",
  },
  addCommentBtn: {
    background: " #F6F6F6",
    border: "1px solid #E8E8E8",
    borderRadius: 100,
  },
  input: {
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    width: 343,
    height: 50,
    padding: 8,
    paddingLeft: 16,
    position: "relative",
  },
  iconWrap: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 34,
    height: 34,
    borderRadius: 30,
    backgroundColor: "#FF6C00",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
