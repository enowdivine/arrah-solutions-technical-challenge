import React, { useContext, useState, useEffect } from "react";
import theme from "../../../../theme";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AudioContext } from "../../../context/AudioProvider";

const QuestionSix = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [paceState, setPaceState] = useState("");
  const { meditationPace } = context;

  useEffect(() => {
    setPaceState(meditationPace);
  }, [meditationPace]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>Your plan, designed to work for you.</Text>
          <Text style={styles.ourGoal}>
            Knowing you, which pace do you prefer?
          </Text>
        </View>
        <TouchableOpacity
          style={paceState === "fast" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              meditationPace: "fast",
            })
          }
        >
          <Text
            style={
              paceState === "fast" ? styles.btnTextSelected : styles.btnText
            }
          >
            As fast as possible
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={paceState === "slow" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              meditationPace: "slow",
            })
          }
        >
          <Text
            style={
              paceState === "slow" ? styles.btnTextSelected : styles.btnText
            }
          >
            Slow and steady
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={paceState === "normal" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              meditationPace: "normal",
            })
          }
        >
          <Text
            style={
              paceState === "normal" ? styles.btnTextSelected : styles.btnText
            }
          >
            Somewhere in between
          </Text>
        </TouchableOpacity>

        {/*  */}
        {paceState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionSeven")}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
};

export default QuestionSix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "90%",
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.mainColor,
    marginBottom: 10,
  },
  selected: {
    width: "90%",
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "cyan",
    backgroundColor: theme.mainColor,
    marginBottom: 10,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btnTextSelected: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  textView: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  ourGoal: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  continueBtn: {
    width: "90%",
    padding: 20,
    borderRadius: 50,
    backgroundColor: theme.mainColor,
    marginTop: 30,
  },
  continueText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
