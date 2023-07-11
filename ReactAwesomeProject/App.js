import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import CommentsScreen from "./screens/CommentsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import store, { persistor } from "./Redux/store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();




const useRoute = (isAuth) => {

  if (!isAuth) {
    return (
      <MainStack.Navigator
        initialRouteName="Registration"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    );
  } else {
    return (
      <Tab.Navigator tabBarOptions={{showLabel:false}}>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{ headerShown: false ,tabBarIcon:({focused,size,color}) => (<MaterialCommunityIcons name="postage-stamp" size={24} color={color} />)}}
        ></Tab.Screen>
        <Tab.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ headerShown: false , tabBarIcon:({focused,size,color}) => (<Ionicons name="md-create" size={24} color={color} />) }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false , tabBarIcon:({focused,size,color}) => (<MaterialCommunityIcons name="face-man-profile" size={24} color={color} />)}}
        />
      </Tab.Navigator>
    );
  }
};

function AppContent() {
  const dataAuth = useSelector((state) => state.auth);
  const acceptAuth = useRoute(dataAuth);

  return (
    <NavigationContainer>
      {acceptAuth}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


