import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease counter"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Couter : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
