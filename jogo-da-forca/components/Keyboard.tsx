import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  guessed: string[];
  wrong: string[];
  onPress: (letter: string) => void;
  disabled: boolean;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Keyboard({ guessed, wrong, onPress, disabled }: Props) {
  return (
    <View style={styles.container}>
      {ALPHABET.map((letter) => {
        const isUsed = guessed.includes(letter) || wrong.includes(letter);
        return (
          <TouchableOpacity
            key={letter}
            onPress={() => onPress(letter)}
            disabled={disabled || isUsed}
            style={[styles.key, isUsed && styles.keyUsed]}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'center',
  },
  key: {
    width: 36,
    height: 36,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 2,
  },
  keyUsed: {
    backgroundColor: '#475569',
  },
  keyText: { color: '#fff', fontWeight: '600' },
});
