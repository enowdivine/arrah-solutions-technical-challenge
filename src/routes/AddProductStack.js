import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AddProduct from '../screens/app/AddProduct';

const AddProductStackScreen = createStackNavigator();

export default function AddProductStack() {
  return (
    <AddProductStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <AddProductStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="AddProduct"
        component={AddProduct}
      />
    </AddProductStackScreen.Navigator>
  );
}
