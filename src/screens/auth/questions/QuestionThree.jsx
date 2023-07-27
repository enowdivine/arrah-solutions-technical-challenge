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

const QuestionThree = ({ navigation }) => {
  const context = useContext(AudioContext);
  const [biggestStressState, setBiggestStressState] = useState("");
  const { biggestStress } = context;

  useEffect(() => {
    setBiggestStressState(biggestStress);
  }, [biggestStress]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.ourGoal}>
            What's typically the biggest source of stress for you?
          </Text>
        </View>
        <TouchableOpacity
          style={biggestStressState === "money" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              biggestStress: "money",
            })
          }
        >
          <Text
            style={
              biggestStressState === "money"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Money
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={biggestStressState === "health" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              biggestStress: "health",
            })
          }
        >
          <Text
            style={
              biggestStressState === "health"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Health
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            biggestStressState === "work-or-school"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              biggestStress: "work-or-school",
            })
          }
        >
          <Text
            style={
              biggestStressState === "work-or-school"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Work or school
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            biggestStressState === "relationships"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              biggestStress: "relationships",
            })
          }
        >
          <Text
            style={
              biggestStressState === "relationships"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Relationships
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={
            biggestStressState === "responsibilities"
              ? styles.selected
              : styles.btn
          }
          onPress={() =>
            context.updateState(context, {
              biggestStress: "responsibilities",
            })
          }
        >
          <Text
            style={
              biggestStressState === "responsibilities"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Responsibilities
          </Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={biggestStressState === "other" ? styles.selected : styles.btn}
          onPress={() =>
            context.updateState(context, {
              biggestStress: "other",
            })
          }
        >
          <Text
            style={
              biggestStressState === "other"
                ? styles.btnTextSelected
                : styles.btnText
            }
          >
            Other
          </Text>
        </TouchableOpacity>

        {/*  */}
        {biggestStressState !== "" ? (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.navigate("QuestionFour")}
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

export default QuestionThree;

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
