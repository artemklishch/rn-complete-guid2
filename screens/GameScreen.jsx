import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "../components/Card";
import NumberComponent from "../components/NumberComponent";

const generateRandomBetween = (min, max, exlude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent`s guess</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GRATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
