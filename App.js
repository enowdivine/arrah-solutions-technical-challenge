import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/routes/RootStack";
import store from "./src/redux/store";
import { Provider } from "react-redux";

import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "localhost:4000/api/v1/graphiql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
