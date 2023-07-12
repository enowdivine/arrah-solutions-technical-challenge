import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Premium from "../screens/app/premiumScreens/Premium";

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
    </PremiumStackScreen.Navigator>
  );
};

export default PremiumStack;
