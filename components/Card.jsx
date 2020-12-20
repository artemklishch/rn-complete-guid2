import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 8,
    borderRadius: 10,
    padding: 20,
  },
});

export default Card;
