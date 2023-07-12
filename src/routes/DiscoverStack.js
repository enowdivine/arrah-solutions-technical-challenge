import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Search from "../screens/app/searchScreens/Search";

const SearchStackScreen = createStackNavigator();

const DiscoverStack = () => {
  return (
    <SearchStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <SearchStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="SearchStack"
        component={Search}
      />
    </SearchStackScreen.Navigator>
  );
};

export default DiscoverStack;
