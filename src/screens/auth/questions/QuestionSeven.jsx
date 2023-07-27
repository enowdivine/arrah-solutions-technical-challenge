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

const QuestionSeven = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [stateOfMindState, setStateOfMindState] = useState("");
  const { stateOfMind } = context;

  useEffect(() => {
    setStateOfMindState(stateOfMind);
  }, [stateOfMind]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>
            Let's better understand your current state of mind.
          </Text>
          <Text style={styles.ourGoal}>
            At this moment, how motivated are you to reduce your stress?
          </Text>
        </View>
        <TouchableOpacity
          style={stateOfMindState === "ready" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              stateOfMind: "ready",
            })
          }
        >
          <Text
            style={
              stateOfMindState === "ready"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            I'm ready
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={stateOfMindState === "hopeful" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              stateOfMind: "hopeful",
            })
          }
        >
          <Text
            style={
              stateOfMindState === "hopeful"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Feeling hopeful
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={stateOfMindState === "cautious" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              stateOfMind: "cautious",
            })
          }
        >
          <Text
            style={
              stateOfMindState === "cautious"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            I'm cautious
          </Text>
        </TouchableOpacity>

        {/*  */}
        {stateOfMindState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionEight")}
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

export default QuestionSeven;

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
    paddingHorizontal: 20,
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
