import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRounds] = useState(0);
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };
  const configureGameStartHadler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestart={configureGameStartHadler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
