import React from "react";
import { StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
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
