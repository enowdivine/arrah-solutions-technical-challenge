import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../../../../theme";
import { FontAwesome5 } from "@expo/vector-icons";
import PlanAction from "./PlanAction";

const PremiumPlan = () => {
  const [planAction, setPlanAction] = useState(false);

  return (
    <>
      <View style={styles.yourPlanTop}>
        <Text style={styles.yourPlanTitle}>Your Plan</Text>
      </View>
      <View style={styles.yourPlan}>
        <FontAwesome5
          name="rocket"
          color={theme.mainColor}
          size={53}
          style={styles.icon}
        />
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>premium</Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>10000 FCFA</Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>Expires on: 20-03-2024</Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            deleniti assumenda explicabo commodi? Maiores voluptas quo itaque
            nisi cum. Doloremque iure quasi quibusdam voluptatum inventore sequi
            cum eveniet modi corrupti?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => setPlanAction(true)}
        >
          <Text style={styles.actionText}>Actions</Text>
        </TouchableOpacity>
        <PlanAction
          showActionModal={planAction}
          onCloseCancel={() => setPlanAction(false)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  yourPlanTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 120,
    padding: 20,
    paddingTop: 30,
  },
  yourPlanTitle: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  icon: {
    marginTop: 40,
  },
  yourPlan: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  yourPlanViews: {
    marginTop: 10,
  },
  yourPlanText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  yourPlanDesc: {
    textAlign: "center",
  },
  actionBtn: {
    marginTop: 40,
    backgroundColor: theme.mainColor,
    width: 120,
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default PremiumPlan;
