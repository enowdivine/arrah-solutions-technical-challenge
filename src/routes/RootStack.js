import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useSelector } from "react-redux";

const RootStackScreen = createStackNavigator();

export default function RootStack() {
  const authToken = useSelector((state) => state.auth.userToken);
  return (
    <RootStackScreen.Navigator>
      {authToken ? (
        <RootStackScreen.Screen
          options={{ headerShown: false }}
          name="App"
          component={AppStack}
        />
      ) : (
        <RootStackScreen.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={AuthStack}
        />
      )}
    </RootStackScreen.Navigator>
  );
}
