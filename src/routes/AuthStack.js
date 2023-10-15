import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../screens/auth/Login';

const AuthStackScreen = createStackNavigator();

export default function AuthStack() {
  return (
    <AuthStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
    </AuthStackScreen.Navigator>
  );
}
