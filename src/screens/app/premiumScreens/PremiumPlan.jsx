import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { formatMoney } from "../../../helpers/others";
import theme from "../../../../theme";
import PlanAction from "./PlanAction";

const PremiumPlan = ({ user }) => {
  const [planAction, setPlanAction] = useState(false);

  return (
    <>
      <View style={styles.yourPlanTop}>
        <Text style={styles.yourPlanTitle}>Your Plan</Text>
      </View>
      <View style={styles.yourPlan}>
        <FontAwesome5
          name="check-circle"
          color={"green"}
          size={120}
          style={styles.icon}
        />
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>
            Plan: {user?.subscription.plan}
          </Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>
            Price: {formatMoney(user?.subscription.price)} FCFA
          </Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanText}>
            Expires on: {user?.subscription.endDate}
          </Text>
        </View>
        <View style={styles.yourPlanViews}>
          <Text style={styles.yourPlanDesc}>
            Thank you for subscriing to the digital cofffee{" "}
            {user?.subscription.plan} plan. We are very excited to have you and
            we are here to make you feel better. Keep in mind to continue
            enjoying our exclusive melodies, you must subscribe to another plan
            after the {user?.subscription.endDate}. We hope you have a great
            time and looking forward to getting positive feedbacks from you.
          </Text>
        </View>
        {/* <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => setPlanAction(true)}
        >
          <Text style={styles.actionText}>Actions</Text>
        </TouchableOpacity> */}
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
    marginTop: 20,
  },
  yourPlanText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  yourPlanDesc: {
    textAlign: "center",
    padding: 20,
    fontSize: 17,
  },
  actionBtn: {
    marginTop: 40,
    // backgroundColor: theme.mainColor,
    width: 120,
    padding: 15,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 2,
  },
  actionText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default PremiumPlan;
