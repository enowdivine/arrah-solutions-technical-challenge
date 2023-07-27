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

const QuestionOne = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [calmAtWorkState, setCalmAtWorkState] = useState(false);
  const [improveSleepState, setImproveSleepState] = useState(false);
  const [improveFocusState, setImproveFocusState] = useState(false);
  const [reduceStressState, setReduceStressState] = useState(false);
  const [selfImprovementState, setSelfImprovementState] = useState(false);
  const {
    calmAtWork,
    improveSleep,
    improveFocus,
    reduceStress,
    selfImprovement,
  } = context;

  useEffect(() => {
    setCalmAtWorkState(calmAtWork);
    setImproveSleepState(improveSleep);
    setImproveFocusState(improveFocus);
    setReduceStressState(reduceStress);
    setSelfImprovementState(selfImprovement);
  }, [improveFocus, improveSleep, reduceStress, selfImprovement, calmAtWork]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>Grab Your Coffee</Text>
          <Text style={styles.ourGoal}>
            Our goal is to help you improve your health and happiness
          </Text>
          <Text style={styles.ourHelp}>What can we help you with today?</Text>
        </View>
        <TouchableOpacity
          style={improveSleepState ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              improveSleep: !improveSleep,
            })
          }
        >
          <Text
            style={improveSleepState ? styles.btnTextSelected : styles.btnText}
          >
            Improve sleep quality
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={improveFocusState ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              improveFocus: !improveFocus,
            })
          }
        >
          <Text
            style={improveFocusState ? styles.btnTextSelected : styles.btnText}
          >
            Improve focus
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={reduceStressState ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              reduceStress: !reduceStress,
            })
          }
        >
          <Text
            style={reduceStressState ? styles.btnTextSelected : styles.btnText}
          >
            Reduce stress or anxiety
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={selfImprovementState ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              selfImprovement: !selfImprovement,
            })
          }
        >
          <Text
            style={
              selfImprovementState ? styles.btnTextSelected : styles.btnText
            }
          >
            Self-improvement
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={calmAtWorkState ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              calmAtWork: !calmAtWork,
            })
          }
        >
          <Text
            style={calmAtWorkState ? styles.btnTextSelected : styles.btnText}
          >
            Bring calm to my workplace
          </Text>
        </TouchableOpacity>

        {/*  */}
        {improveSleep ||
        improveFocus ||
        reduceStress ||
        selfImprovement ||
        calmAtWork ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionTwo")}
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

export default QuestionOne;

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
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  ourGoal: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  ourHelp: {
    fontWeight: "bold",
    fontSize: 20,
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
