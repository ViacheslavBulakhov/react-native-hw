import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native-web";
import { createStackNavigator } from "@react-navigation/stack";

import PostCard from "../../../components/postCard";
import MapScreen from "../PostsScreen/MapScreen/MapScreen";
import CommentsScreen from "../PostsScreen/CommentsScreen/CommentsScreen";

const defaultPosts = [
  {
    description: "lis",
    comments: [1, 2],
    location: "qwerety",
    coordinates: { latitude: 37.4226711, longitude: -122.0849872 },
  },
  {
    description: "lis",
    comments: [1, 2],
    location: "qwerety",
    coordinates: { latitude: 37.4226711, longitude: -122.0849872 },
  },
  {
    description: "lis",
    comments: [1, 2],
    location: "qwerety",
    coordinates: { latitude: 37.4226711, longitude: -122.0849872 },
  },
];

const PostsStack = createStackNavigator();

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState(defaultPosts);
  const imageUri = null;

  return (
    <PostsStack.Navigator>
      <PostsStack.Screen options={{ headerShown: false }} name="PostCard">
        {(props) => (
          <View style={{ paddingHorizontal: 16, paddingTop: 32 }}>
            <View style={styles.profileWrap}>
              <View style={styles.userPhotoWrap}>
                {imageUri && <Image source={{ uri: imageUri }} style={{}} />}
              </View>

              <View>
                <Text style={styles.profileName}>Profile Name</Text>
                <Text style={styles.profileEmail}>Profile Email</Text>
              </View>
            </View>

            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <PostCard post={item} onClick={navigation.navigate} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </PostsStack.Screen>

      <PostsStack.Screen
        options={{ headerShown: false }}
        name="CommentsScreen"
        component={CommentsScreen}
      />

      <PostsStack.Screen
        options={{ headerShown: false }}
        name="MapScreen"
        component={MapScreen}
      />
    </PostsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  profileName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
  },
  profileEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "red",
    owerflow: "hidden",
    marginRight: 8,
  },
});
