import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.team1Container}>
        <Text style={styles.scoreText}>0</Text>
      </View>
      <View style={styles.team2Container}>
        <Text style={styles.scoreText}>1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  team1Container: {
    height: "100%",
    width: "50%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  team2Container: {
    height: "100%",
    width: "50%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 48,
    color: "white",
  },
});
