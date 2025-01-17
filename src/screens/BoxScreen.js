import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}>Child #1</View>
      <View style={styles.viewTwoStyle}>Child #2</View>
      <View style={styles.viewThreeStyle}>Child #3</View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 5,
    borderColor: "black",
    height: 160,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  viewOneStyle: {
    backgroundColor: "red",
    height: 75,
    width: 100,
  },
  viewTwoStyle: {
    backgroundColor: "blue",
    height: 75,
    width: 100,
    alignSelf: "flex-end",
  },
  viewThreeStyle: {
    backgroundColor: "green",
    height: 75,
    width: 100,
  },
});

export default BoxScreen;
