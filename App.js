import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollScreen } from "./src/infrastructure/scrollscreen";

export default function App() {
  return (
    <ScrollScreen />

    // <View style={styles.container}>
    //   <Text>Make a ScrollView here!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
