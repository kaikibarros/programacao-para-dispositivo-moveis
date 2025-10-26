import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line, Circle, Rect } from "react-native-svg";

interface Props {
  errors: number; // 0..6
  size?: number; // opcional, default 160 (largura)
  stroke?: string;
  strokeWidth?: number;
}

export default function HangmanDrawing({
  errors,
  size = 160,
  stroke = "#ffe066",
  strokeWidth = 3,
}: Props) {
  // Mantemos proporções fixas dentro de um viewBox 160x220 (como no exemplo anterior)
  const width = size;
  // altura proporcional (mesma proporção que usei antes)
  const height = Math.round((220 / 160) * width);

  return (
    <View style={styles.wrap}>
      <Svg width={width} height={height} viewBox={`0 0 160 220`}>
        {/* Gallow base */}
        <Rect x={10} y={212} width={120} height={6} fill="#d1d5db" rx={3} />
        {/* Gallow pole */}
        <Rect x={30} y={72} width={8} height={140} fill="#d1d5db" rx={3} />
        {/* Gallow arm */}
        <Rect x={30} y={0} width={80} height={8} fill="#d1d5db" rx={3} />
        {/* Rope */}
        <Rect x={100} y={8} width={2} height={30} fill="#d1d5db" />

        {/* Cabecinha) */}
        {errors > 0 && (
          <Circle
            cx={118}
            cy={50}
            r={18}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
        )}

        {/* corpinho */}
        {errors > 1 && (
          <Line
            x1={118}
            y1={68}
            x2={118}
            y2={118}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}

        {/* Bracinho esquerdo */}
        {errors > 2 && (
          <Line
            x1={118}
            y1={78}
            x2={95}
            y2={98}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}

        {/* Bracinho direito */}
        {errors > 3 && (
          <Line
            x1={118}
            y1={78}
            x2={141}
            y2={98}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}

        {/* Perninha esquerda */}
        {errors > 4 && (
          <Line
            x1={118}
            y1={118}
            x2={95}
            y2={148}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}

        {/* Perninha direita */}
        {errors > 5 && (
          <Line
            x1={118}
            y1={118}
            x2={141}
            y2={148}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
});
