import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  word: string;
  guessed: string[];
  reveal: boolean;
}

export default function WordDisplay({ word, guessed, reveal }: Props) {
  return (
    <View style={styles.wordRow}>
      {word.split('').map((letter, i) => (
        <Text key={i} style={styles.letter}>
          {guessed.includes(letter) || reveal ? letter : '_'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wordRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  letter: {
    fontSize: 28,
    color: '#fff',
    marginHorizontal: 4,
    fontWeight: '700',
  },
});
