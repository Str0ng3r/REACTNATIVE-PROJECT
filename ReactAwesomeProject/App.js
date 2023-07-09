import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './screens/RegistrationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import PostsScreen from './screens/PostsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import CommentsScreen from './screens/CommentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import store, { persistor } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            if (route.name === "Posts") {
              iconSource = focused
                ? require('./images/grid.png')
                : require('./images/grid.png');
            } else if (route.name === "CreatePost") {
              iconSource = focused
                ? require('./images/new.png')
                : require('./images/new.png');
            } else if (route.name === "Profile") {
              iconSource = focused
                ? require('./images/user.png')
                : require('./images/user.png');
            }

            return <Image source={iconSource} style={{ width: size, height: size }} />;
          },
          
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showLabel: false
        }}
      >
<Tab.Screen name="Posts" component={PostsScreen} options={{ headerShown: false }}></Tab.Screen>
<Tab.Screen name="CreatePost" component={CreatePostScreen}  options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }}/>

      </Tab.Navigator>
  )
}


export default function App() {
  return (
    <Provider  store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer> 
        <MainStack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name='Home' component={Home}></MainStack.Screen>
        <MainStack.Screen name='Posts' component={PostsScreen}/>
        <MainStack.Screen name='Comments' component={CommentsScreen}/>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name='CreatePost' component={CreatePostScreen}/>
        <MainStack.Screen name='Profile' component={ProfileScreen}/>
      </MainStack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
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
