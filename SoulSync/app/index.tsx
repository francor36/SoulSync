import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function HomeScreen() {

  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        SoulSync
      </Text>

      <Button
        title="Click"
        onPress={() => setMostrar(true)}
      />

      {mostrar && (
        <Text style={styles.text}>
          probando
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    color: "red",
    fontSize: 20,
  },

});