import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, RefreshControl } from "react-native";
import theme from "../../../../theme";
import PlansCard from "../../../components/PlansCard";
import Subscribe from "./Subscribe";
import PremiumPlan from "./PremiumPlan";
import { useDispatch, useSelector } from "react-redux";
import { allPlans } from "../../../redux/reducers/premiumReducer";

const Premium = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([]);
  const [subscribeData, setSubscribeData] = useState(null);

  const userObj = useSelector((state) => state.auth.user);
  const user = userObj?.user;

  const onRefreshFuntion = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(allPlans()).then((res) => {
        setPlans(res.payload);
      });
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(allPlans()).then((res) => {
      setPlans(res.payload);
    });
  }, []);

  return (
    <>
      {user?.subscription.status === "active" ? (
        <View style={styles.container}>
          <PremiumPlan user={user} />
        </View>
      ) : (
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
                    subBtn={() => (setSubscribeData(item), setShowModal(true))}
                  />
                );
              }}
              refreshControl={
                <RefreshControl
                  onRefresh={onRefreshFuntion}
                  refreshing={refreshing}
                />
              }
            />
          </View>
          <Subscribe
            showSubscribeModal={showModal}
            onCloseCancel={() => setShowModal(false)}
            subscribeData={subscribeData}
            user={user}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
