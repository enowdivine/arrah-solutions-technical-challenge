import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextTicker from "react-native-text-ticker";

const CoffeGridView = ({ title, coverImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image src={coverImage} style={styles.image} />
      </View>
      <View style={styles.details}>
        <TextTicker
          width={150}
          duration={30000}
          loop
          bounce={false}
          style={styles.title}
        >
          {title}
        </TextTicker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  imageView: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default CoffeGridView;
