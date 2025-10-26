import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HangmanDrawing from "../components/HangmanDrawing";
import Keyboard from "../components/Keyboard";
import WordDisplay from "../components/WordDisplay";
import GameControls from "../components/GameControls";
import { WORDS } from "../constants/words";

const MAX_ERRORS = 6;

export default function JogoDaForca() {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  function pickRandomWord() {
    const idx = Math.floor(Math.random() * WORDS.length);
    return WORDS[idx].toUpperCase();
  }

  function startNewGame() {
    setWord(pickRandomWord());
    setGuessed([]);
    setWrong([]);
    setInput("");
    setGameOver(false);
    setWon(false);
  }

  function handleGuess(letter: string) {
    if (gameOver) return;
    if (guessed.includes(letter) || wrong.includes(letter)) return; // já tentada

    if (word.includes(letter)) {
      const newGuessed = [...guessed, letter];
      setGuessed(newGuessed);

      // Checa vitória
      const uniqueLetters = Array.from(new Set(word.split("")));
      if (uniqueLetters.every((l) => newGuessed.includes(l))) {
        setWon(true);
        setGameOver(true);
      }
    } else {
      const newWrong = [...wrong, letter];
      setWrong(newWrong);

      // Checa derrota
      if (newWrong.length >= MAX_ERRORS) {
        setGameOver(true);
        setWon(false);
      }
    }
  }

  function handleSubmitInput() {
    if (input.trim() !== "") {
      handleGuess(input.toUpperCase());
      setInput("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <View style={styles.gameRow}>
        <HangmanDrawing
          errors={wrong.length}
          size={180}
          stroke="#ffe066"
          strokeWidth={3}
        />
        <View style={styles.infoPanel}>
          <Text style={styles.info}>
            Tentativas restantes: {MAX_ERRORS - wrong.length}
          </Text>
          <WordDisplay word={word} guessed={guessed} reveal={gameOver} />

          {/* Letras Tentadas */}
          <View style={styles.attemptsContainer}>
            <Text style={styles.attemptsTitle}>Letras Tentadas:</Text>
            <View style={styles.lettersRow}>
              {Array.from(new Set([...guessed, ...wrong])).map((l, i) => (
                <Text
                  key={i}
                  style={
                    guessed.includes(l)
                      ? styles.correctLetter
                      : styles.wrongLetter
                  }
                >
                  {l}
                </Text>
              ))}
            </View>
          </View>

          {/* Input manual
          <View style={styles.inputRow}>
            <TextInput
              value={input}
              onChangeText={t => setInput(t.toUpperCase())}
              placeholder="Digite uma letra"
              placeholderTextColor="#999"
              style={styles.input}
              maxLength={1}
              editable={!gameOver}
            />
            <TouchableOpacity onPress={handleSubmitInput} style={styles.btn} disabled={gameOver}>
              <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
          </View> */}

         
        </View>
      </View>

      <ScrollView style={styles.keyboardScroll}>
        <Keyboard
          guessed={guessed}
          wrong={wrong}
          onPress={handleGuess}
          disabled={gameOver}
        />
      </ScrollView>
       <GameControls
            gameOver={gameOver}
            won={won}
            word={word}
            onRestart={startNewGame}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1B3C53", padding: 20 },
  title: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "700",
    color: "#FFEAD8",
    textAlign: "center",
    marginBottom: 7,
  },
  gameRow: { flexDirection: "row", gap: 12 },
  infoPanel: { flex: 1, padding: 8 },
  info: { color: "#cbd5e1", marginBottom: 6 },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  input: {
    width: 120,
    height: 44,
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
    marginRight: 8,
  },
  btn: {
    
    backgroundColor: "#1e293b",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "700" },
  keyboardScroll: { marginTop: 20 },
  attemptsContainer: { marginVertical: 12, alignItems: "center" },
  attemptsTitle: {
    color: "#FDEB9E",
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "600",
    
  },
  lettersRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 4,
  },
  correctLetter: {
    color: "#22c55e",
    fontWeight: "700",
    marginHorizontal: 4,
    fontSize: 18,
  },
  wrongLetter: {
    color: "#ef4444",
    fontWeight: "700",
    marginHorizontal: 4,
    fontSize: 18,
  },
});
