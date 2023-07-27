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

const QuestionTwo = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [latelyFeelingState, setLatelyFeelingState] = useState("");
  const { latelyFeeling } = context;

  useEffect(() => {
    setLatelyFeelingState(latelyFeeling);
  }, [latelyFeeling]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.ourGoal}>How have you been feeling lately?</Text>
        </View>
        <TouchableOpacity
          style={latelyFeelingState === "good" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              latelyFeeling: "good",
            })
          }
        >
          <Text
            style={
              latelyFeelingState === "good"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Good
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            latelyFeelingState === "stressed" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              latelyFeeling: "stressed",
            })
          }
        >
          <Text
            style={
              latelyFeelingState === "stressed"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Stressed
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            latelyFeelingState === "depressed" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              latelyFeeling: "depressed",
            })
          }
        >
          <Text
            style={
              latelyFeelingState === "depressed"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Depressed
          </Text>
        </TouchableOpacity>

        {/*  */}
        {latelyFeelingState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionThree")}
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

export default QuestionTwo;

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
    fontSize: 20,
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
