import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Search from "../screens/app/searchScreens/Search";
import AudioPlayer from "../screens/app/homeScreens/AudioPlayer";

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

      {/* AUDIO PLAYER */}
      <SearchStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="AudioPlayer"
        component={AudioPlayer}
      />
    </SearchStackScreen.Navigator>
  );
};

export default DiscoverStack;
