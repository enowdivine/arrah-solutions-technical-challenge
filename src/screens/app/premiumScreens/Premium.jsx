import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import theme from "../../../../theme";
import PlansCard from "../../../components/PlansCard";
import Subscribe from "./Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { allPlans } from "../../../redux/reducers/premiumReducer";

const Premium = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([1, 2, 3, 4]);
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    dispatch(allPlans()).then((res) => {
      setPlans(res.payload);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.premiumTop}>
        <Text style={styles.heading}>Premium Plans</Text>
      </View>
      <View style={styles.planList}>
        <FlatList
          data={plans}
          renderItem={({ item }) => {
            return (
              <PlansCard
                category={item.category}
                price={item.price}
                duration={item.duration}
                desc={item.desc}
                subBtn={() => setShowModal(true)}
              />
            );
          }}
        />
      </View>
      <Subscribe
        showSubscribeModal={showModal}
        onCloseCancel={() => setShowModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  premiumTop: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 120,
    padding: 20,
    paddingTop: 30,
  },
  heading: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  planList: {
    width: "100%",
    flex: 1,
  },
});

export default Premium;
