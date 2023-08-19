import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  errorView: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ffcccb",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
  },
  successView: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#90EE90",
  },
  successText: {
    color: "green",
    fontWeight: "bold",
  },
  passwordView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordInputView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
  },
  passwordInput: {
    flexGrow: 1,
  },
  inputView: {
    marginBottom: 10,
  },
});
