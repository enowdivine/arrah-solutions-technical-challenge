import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Products from "../screens/app/Products";
import UpdateProduct from "../screens/app/UpdateProduct";

const ProductStackScreen = createStackNavigator();

export default function ProductStack() {
  return (
    <ProductStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <ProductStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Products"
        component={Products}
      />
      <ProductStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="UpdateProduct"
        component={UpdateProduct}
      />
    </ProductStackScreen.Navigator>
  );
}
