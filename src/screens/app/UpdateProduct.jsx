import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Loading from "../../components/Loading";
import theme from "../../../theme";
import { ScrollView } from "react-native-gesture-handler";
// apollo client
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from "../../apollo/mutations";

const UpdateProduct = ({ route }) => {
  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const [productCurrency, setProductCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  // apollo client
  const [addProduct, options] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct, deleteOptions] = useMutation(DELETE_PRODUCT);

  const addProductHandler = () => {
    if (productName && productAmount && productCurrency) {
      addProduct({
        variables: {
          id: route.params.item.id,
          name: productName,
          amount: productAmount,
          currency: productCurrency,
        },
      }).then((res) => {
        const { data } = res;
        if (data.addProduct.response.status === "success") {
          console.log("Product added");
        } else {
          console.error("Error adding product");
        }
      });
    } else {
      console.error("All fields are required");
    }
  };

  const deleteProductHandler = () => {
    deleteProduct({
      variables: {
        id: route.params.item.id,
      },
    }).then((res) => {
      const { data } = res;
      if (data.addProduct.response.status === "success") {
        console.log("Product deleted");
      } else {
        console.error("Error deleting product");
      }
    });
  };

  useEffect(() => {
    setProductName(route.params.item.name);
    setProductAmount(JSON.stringify(route.params.item.amount));
    setProductCurrency(route.params.item.currency);
  }, []);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.productForm}>
            <Text style={styles.header}>Edit Product</Text>
            <View style={styles.inputView}>
              <Text style={styles.label}>Product Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Product name"
                defaultValue={productName}
                onChangeText={(value) => setProductName(value)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Product Amount</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Product amount"
                defaultValue={productAmount}
                onChangeText={(value) => setProductAmount(value)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Product Currency</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Product name"
                defaultValue={productCurrency}
                onChangeText={(value) => setProductCurrency(value)}
              />
            </View>
            <TouchableOpacity
              onPress={addProductHandler}
              style={styles.submitBtn}
            >
              {loading ? (
                <Loading size="small" color="#fff" />
              ) : (
                <Text style={styles.loginText}>Update Product</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={deleteProductHandler}
              style={styles.deletebtn}
            >
              {loading ? (
                <Loading size="small" color="#fff" />
              ) : (
                <Text style={styles.loginText}>Delete Product</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
    fontSize: 25,
  },
  productForm: {
    padding: 30,
    width: "100%",
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: "grey",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  submitBtn: {
    backgroundColor: theme.mainColor,
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  deletebtn: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  loginText: { color: "white", textAlign: "center" },
});

export default UpdateProduct;
