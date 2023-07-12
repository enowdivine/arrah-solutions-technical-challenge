import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const CoffeGridView = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/logo/coffee.jpeg")}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Letting go of anxiety</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 180,
    height: 140,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default CoffeGridView;
