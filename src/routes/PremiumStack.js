import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Premium from "../screens/app/premiumScreens/Premium";
import Subscribe from "../screens/app/premiumScreens/Subscribe";

const PremiumStackScreen = createStackNavigator();

const PremiumStack = () => {
  return (
    <PremiumStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <PremiumStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="PremiumStack"
        component={Premium}
      />

      {/* SUBSCRIBE SCREEN */}
      <PremiumStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Subscribe"
        component={Subscribe}
      />
    </PremiumStackScreen.Navigator>
  );
};

export default PremiumStack;
