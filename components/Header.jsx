import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  headerTitle: {
    fontSize: 18,
    color: "black",
  },
});

export default Header;
