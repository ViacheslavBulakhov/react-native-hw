import { View, Text, StyleSheet } from "react-native";

export default function CommentsCard({ post }) {
  return (
    <View style={styles.postCardWrap}>
      <View style={styles.imageWrap}></View>
      <View style={styles.commentWrap}>
        <Text style={styles.commentText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          incidunt dolorem, fuga sit ratione dolor magnam.
        </Text>
        <Text style={styles.commentDate}>09 Червня, 2020 | 08:40</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postCardWrap: {
    width: "100%",
    flexDirection: "row",
    marginTop: 24,
  },
  imageWrap: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: "green",
  },
  postComments: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#212121",
  },
  commentWrap: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    marginLeft: 16,
    maxWidth: 299,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
  },
  commentDate: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});
