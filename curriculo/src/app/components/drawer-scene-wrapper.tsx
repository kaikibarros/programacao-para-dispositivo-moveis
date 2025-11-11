import { ReactNode } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";

import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated"

export function DrawerSceneWrapper({ children }: { children: React.ReactNode }) {
    const progress = useDrawerProgress();

    const animatedStyled = useAnimatedStyle(() => ({
        transform: [{
            scale: interpolate
                (progress.value,
                    [0, 1],
                    [1, ],
                    Extrapolation.CLAMP),
        },
    {
        translateX: interpolate
            (progress.value,
                [0, 1],
                [0, 200],
                Extrapolation.CLAMP),
    }
    ]
    }))
    return (
        <Animated.View style={[{ flex: 1 }, animatedStyled]}>
            {children}
        </Animated.View>
    )
}
