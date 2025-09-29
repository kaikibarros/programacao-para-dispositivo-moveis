import { View, StyleSheet } from 'react-native';

export default function HangmanDrawing({ errors }: { errors: number }) {
  return (
    <View style={styles.hangmanWrap}>
      <View style={styles.gallowBase} />
      <View style={styles.gallowPole} />
      <View style={styles.gallowArm} />
      <View style={styles.gallowRope} />
      {errors > 0 && <View style={styles.head} />}
      {errors > 1 && <View style={styles.body} />}
      {errors > 2 && <View style={[styles.arm, styles.leftArm]} />}
      {errors > 3 && <View style={[styles.arm, styles.rightArm]} />}
      {errors > 4 && <View style={[styles.leg, styles.leftLeg]} />}
      {errors > 5 && <View style={[styles.leg, styles.rightLeg]} />}
    </View>
  );
}

const styles = StyleSheet.create({
  hangmanWrap: { width: 160, height: 220, position: 'relative' },
  gallowBase: { position: 'absolute', bottom: 0, left: 10, width: 120, height: 8, backgroundColor: '#d1d5db' },
  gallowPole: { position: 'absolute', bottom: 8, left: 30, width: 8, height: 140, backgroundColor: '#d1d5db' },
  gallowArm: { position: 'absolute', top: 0, left: 30, width: 80, height: 8, backgroundColor: '#d1d5db' },
  gallowRope: { position: 'absolute', top: 8, left: 100, width: 2, height: 30, backgroundColor: '#d1d5db' },
  head: { position: 'absolute', top: 34, left: 82, width: 36, height: 36, borderRadius: 18, borderWidth: 3, borderColor: '#ffe066' },
  body: { position: 'absolute', top: 72, left: 97, width: 2, height: 58, backgroundColor: '#ffe066' },
  arm: { position: 'absolute', top: 86, width: 40, height: 2, backgroundColor: '#ffe066' },
  leftArm: { left: 60, transform: [{ rotate: '-35deg' }] },
  rightArm: { left: 98, transform: [{ rotate: '35deg' }] },
  leg: { position: 'absolute', top: 126, width: 40, height: 2, backgroundColor: '#ffe066' },
  leftLeg: { left: 70, transform: [{ rotate: '45deg' }] },
  rightLeg: { left: 99, transform: [{ rotate: '-45deg' }] },
});
