import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  gameOver: boolean;
  won: boolean;
  word: string;
  onRestart: () => void;
}


export default function GameControls({
  gameOver,
  won,
  word,
  onRestart,
}: Props) {
  return (
    <View style={styles.container}>
      {gameOver && (
        <Text style={[styles.result, { color: won ? "#22c55e" : "#ef4444" }]}>
          {won ? "Você venceu! 🎉" : `Você perdeu! A palavra era: ${word}`}
        </Text>
      )}
      <TouchableOpacity onPress={onRestart} style={styles.btn}>
        <Text style={styles.btnText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30, alignItems: "center" },
  result: { fontSize: 16, marginBottom: 6, fontWeight: "700" },
  btn: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 100,
  },
  btnText: { color: "#fff", fontWeight: "700" },
});
