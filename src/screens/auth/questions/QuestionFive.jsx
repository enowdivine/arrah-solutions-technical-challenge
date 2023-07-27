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

const QuestionFive = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [meditationExperienceState, setMeditationExperienceState] =
    useState("");
  const { meditationExperience } = context;

  useEffect(() => {
    setMeditationExperienceState(meditationExperience);
  }, [meditationExperience]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.ourGoal}>
            What's your experience with meditation?
          </Text>
        </View>
        <TouchableOpacity
          style={
            meditationExperienceState === "none" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              meditationExperience: "none",
            })
          }
        >
          <Text
            style={
              meditationExperienceState === "none"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            None
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            meditationExperienceState === "few-times"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              meditationExperience: "few-times",
            })
          }
        >
          <Text
            style={
              meditationExperienceState === "few-times"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            I've tried a few times
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            meditationExperienceState === "experienced"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              meditationExperience: "experienced",
            })
          }
        >
          <Text
            style={
              meditationExperienceState === "experienced"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            I've meditated a lot
          </Text>
        </TouchableOpacity>

        {/*  */}
        {meditationExperienceState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionSix")}
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

export default QuestionFive;

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
