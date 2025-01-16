import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => {
          dispatch({ type: "increment", payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title="Decrease counter"
        onPress={() => {
          dispatch({ type: "decrement", payload: COUNTER_INCREMENT });
        }}
      />
      <Text>Current Couter : {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
