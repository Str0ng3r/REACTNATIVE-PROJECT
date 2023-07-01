import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import PostsScreen from './screens/PostsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import CommentsScreen from './screens/CommentsScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer> 
          <CommentsScreen></CommentsScreen>
      {/* <MainStack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name='Posts' component={PostsScreen}/>
        <MainStack.Screen name='Comments' component={CommentsScreen}/>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="CreatePost" component={CreatePostScreen} />
      </MainStack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
