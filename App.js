import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/routes/RootStack";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import AudioProvider from "./src/context/AudioProvider";

export default function App() {
  return (
    <AudioProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </AudioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
