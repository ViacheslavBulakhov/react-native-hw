
import { useState } from "react";
import {
Text,
  View,
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native-web";
import PostCard from "../../../components/postCard";

export default function PostsScreen() {
   const [posts,setPosts] = useState([])
   const imageUri = null;
   const data = [{description: "lis", comments: [1,2], location: "qwerety"},
    {description: "lis", comments: [1,2], location: "qwerety"},
    {description: "lis", comments: [1,2], location: "qwerety"}];

    return (
        <View  style={{paddingHorizontal:16,paddingTop:32}}>
            <View style={styles.profileWrap}>
                <View style={styles.userPhotoWrap}>
                    {imageUri && <Image source={{ uri: imageUri}} style={{}} />}
                </View>

                <View>
                    <Text style={styles.profileName}>Profile Name</Text>
                    <Text style={styles.profileEmail}>Profile Email</Text>
                </View> 
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => <PostCard post={item} />}
                keyExtractor={(item, index) => index.toString()}
               
            />


        </View>
      );
    }
    
    
 const styles = StyleSheet.create({

    profileName:{
        fontFamily: 'Roboto-Bold',
        fontSize: 13, 
        color: "#212121",
    },
    profileEmail:{
        fontFamily: 'Roboto-Regular',
        fontSize: 11, 
        color: "rgba(33, 33, 33, 0.8)",
    },
    profileWrap : {
        flexDirection: "row",
        alignItems: "center",
    }, 
    userPhotoWrap:{
        width: 60, 
        height: 60,
        borderRadius: 16,
        backgroundColor: "red",
        owerflow:"hidden",
        marginRight:8,
    },

    });



