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

const QuestionEight = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [meditationTimeState, setMeditationTimeState] = useState("");
  const { meditationTime } = context;

  useEffect(() => {
    setMeditationTimeState(meditationTime);
  }, [meditationTime]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>When would you like to meditate?</Text>
          <Text style={styles.ourGoal}>
            It's helpful to set aside time as part of your existing routing,
            like after waking up or before going to bed.
          </Text>
        </View>
        <TouchableOpacity
          style={
            meditationTimeState === "morning" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              meditationTime: "morning",
            })
          }
        >
          <Text
            style={
              meditationTimeState === "morning"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Morning
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            meditationTimeState === "afternoon" ? styles.selected : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              meditationTime: "afternoon",
            })
          }
        >
          <Text
            style={
              meditationTimeState === "afternoon"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Afternoon
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={meditationTimeState === "night" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              meditationTime: "night",
            })
          }
        >
          <Text
            style={
              meditationTimeState === "night"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Night
          </Text>
        </TouchableOpacity>

        {/*  */}
        {meditationTimeState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("Welcome")}
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

export default QuestionEight;

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
