import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AddContactScreen from './screens/AddContactScreen';
import SplashScreen from './screens/SplashScreen';
import ContactosScreen from './screens/ContactScreen';
import ContactSplash from './screens/ContactSplash';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        {/* Place the ExpoStatusBar component here */}
        <StatusBar style="auto" />

        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
         <Stack.Screen
            name="ContactosScreen"
            component={ContactosScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddContactScreen"
            component={AddContactScreen}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="ContactSplash"
            component={ContactSplash}
            options={{ headerShown: false }}
          /> 


        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;