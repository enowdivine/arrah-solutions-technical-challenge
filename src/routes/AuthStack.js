import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import QuestionOne from "../screens/auth/questions/QuestionOne";
import QuestionTwo from "../screens/auth/questions/QuestionTwo";
import QuestionThree from "../screens/auth/questions/QuestionThree";
import QuestionFour from "../screens/auth/questions/QuestionFour";
import QuestionFive from "../screens/auth/questions/QuestionFive";
import QuestionSix from "../screens/auth/questions/QuestionSix";
import QuestionSeven from "../screens/auth/questions/QuestionSeven";
import QuestionEight from "../screens/auth/questions/QuestionEight";

import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";

const AuthStackScreen = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      {/*QUESTION ONE */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionOne"
        component={QuestionOne}
      ></AuthStackScreen.Screen>

      {/*QUESTION TWO */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionTwo"
        component={QuestionTwo}
      ></AuthStackScreen.Screen>

      {/*QUESTION THREE */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionThree"
        component={QuestionThree}
      ></AuthStackScreen.Screen>

      {/*QUESTION FOUR */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionFour"
        component={QuestionFour}
      ></AuthStackScreen.Screen>

      {/*QUESTION FIVE */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionFive"
        component={QuestionFive}
      ></AuthStackScreen.Screen>

      {/*QUESTION SIX */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionSix"
        component={QuestionSix}
      ></AuthStackScreen.Screen>

      {/*QUESTION SEVEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionSeven"
        component={QuestionSeven}
      ></AuthStackScreen.Screen>

      {/*QUESTION EIGHT */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="QuestionEight"
        component={QuestionEight}
      ></AuthStackScreen.Screen>
      {/* =========================================== */}

      {/* WELCOME SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={Welcome}
      ></AuthStackScreen.Screen>

      {/* LOGIN SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      ></AuthStackScreen.Screen>

      {/* SIGNUP SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Signup"
        component={Signup}
      ></AuthStackScreen.Screen>

      {/* FORGOT PASSWORD SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      ></AuthStackScreen.Screen>
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="ResetPassword"
        component={ResetPassword}
      ></AuthStackScreen.Screen>
    </AuthStackScreen.Navigator>
  );
};

export default AuthStack;
