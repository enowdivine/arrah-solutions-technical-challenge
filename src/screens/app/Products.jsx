import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
// apllo client
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../apollo/queries";

const products = [
  {
    id: 1,
    name: "Iphone 11",
    imageUrl: "https://picsum.photos/300",
    amount: 1000,
    currency: "USD",
  },
  {
    id: 2,
    name: "Samsung TV",
    imageUrl: "https://picsum.photos/300",
    amount: 12300,
    currency: "USD",
  },
  {
    id: 3,
    name: "MacBook 2019",
    imageUrl: "https://picsum.photos/300",
    amount: 1200,
    currency: "USD",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    imageUrl: "https://picsum.photos/300",
    amount: 5100,
    currency: "USD",
  },
];

const Products = ({ navigation }) => {
  const { data } = useQuery(GET_PRODUCTS);
  const allProducts = data?.products;
  console.log(allProducts);

  const formatMoney = (amount) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");
    return dollarUSLocale.format(amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Products</Text>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={products}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.product}
                onPress={() => navigation.navigate("UpdateProduct", { item })}
              >
                <View style={styles.imageView}>
                  <Image src={item.imageUrl} style={styles.image} />
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productAmount}>
                    {item.currency} {formatMoney(item.amount)}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: theme.mainColor,
    minHeight: 110,
    paddingTop: 30,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 18,
  },
  productList: {
    width: "100%",
    padding: 10,
  },
  product: {
    flexDirection: "row",
    marginBottom: 10,
  },
  imageView: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  productInfo: {
    marginLeft: 10,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  productAmount: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Products;
