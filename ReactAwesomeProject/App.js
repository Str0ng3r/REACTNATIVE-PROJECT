import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import PostsScreen from './screens/PostsScreen';
const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <PostsScreen></PostsScreen> */}
      <MainStack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
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
