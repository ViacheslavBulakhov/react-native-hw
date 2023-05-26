import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../mainScreen/PostsScreen/PostsScreen';
import CreatePostsScreen from '../mainScreen/CreatePostScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreen/ProfileScreen/ProfileScreen';
import { StyleSheet } from 'react-native-web';
import { AntDesign, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const IconWrap = ({ isActive, type})=>{

  let componentToRender;

  if (type === 'apps') {
    componentToRender = <AntDesign name="appstore-o" size={24} color={isActive ? "#FFFFFF" : "#212121" } />;
  } else if (type === 'addPost') {
    componentToRender =  <AntDesign name="plus" size={24} color={isActive ? "#FFFFFF" : "#212121" } />;
  } else {
    componentToRender = <Feather name="user" size={24} color={isActive ? "#FFFFFF" : "#212121" } />
    ;
  }

  return(<View style={isActive ? styles.iconWrap : styles.wrap}>
    {componentToRender}
  </View>)
}


export default function Home({setIsLoggedIn}) {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:styles.container,
      tabBarShowLabel:false,
    }}>
      <Tab.Screen options={{
        tabBarIcon:({ focused, color, size })=> <IconWrap isActive={focused} type={"apps"}/>,
        headerRight: () => <Feather name="log-out" size={24} color="black" style={styles.logOut} onPress={()=> setIsLoggedIn((state)=>!state)}/>,
      }} 
      name="PostsScreen"
      component={PostsScreen} />

      <Tab.Screen options={{
        tabBarIcon:({ focused, color, size })=> <IconWrap isActive={focused} type={"addPost"}/>,
      }} 
      name="CreatePostsScreen" 
      component={CreatePostsScreen} />

      <Tab.Screen options={{
        tabBarIcon:({ focused, color, size })=> <IconWrap isActive={focused} type={"profile"}/>,
      }} 
      name="ProfileScreen" 
     >{(props) => <ProfileScreen {...props} setIsLoggedIn={setIsLoggedIn} />}</Tab.Screen>

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconWrap: {
    width:70,
    height:40,
    borderRadius:20,
    backgroundColor: "#FF6C00",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  wrap:{

  },
  logOut:{
    marginRight:16,
  }
})