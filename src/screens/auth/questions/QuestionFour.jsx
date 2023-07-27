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

const QuestionFour = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [stressSymtomState, setStressSymtomState] = useState("");
  const { stressSymtom } = context;

  useEffect(() => {
    setStressSymtomState(stressSymtom);
  }, [stressSymtom]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.ourGoal}>
            How does the stress usually show up for you?
          </Text>
        </View>
        <TouchableOpacity
          style={stressSymtomState === "anxious" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              stressSymtom: "anxious",
            })
          }
        >
          <Text
            style={
              stressSymtomState === "anxious"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Anxious thoughts
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            stressSymtomState === "discomfort" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              stressSymtom: "discomfort",
            })
          }
        >
          <Text
            style={
              stressSymtomState === "discomfort"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Physical discomfort
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            stressSymtomState === "moodiness" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              stressSymtom: "moodiness",
            })
          }
        >
          <Text
            style={
              stressSymtomState === "moodiness"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Moodiness
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            stressSymtomState === "difficulty-sleeping"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              stressSymtom: "difficulty-sleeping",
            })
          }
        >
          <Text
            style={
              stressSymtomState === "difficulty-sleeping"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Difficulty sleeping
          </Text>
        </TouchableOpacity>

        {/*  */}
        {stressSymtomState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionFive")}
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

export default QuestionFour;

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
