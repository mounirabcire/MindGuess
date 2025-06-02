import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

interface ButtonI {
    children: React.ReactNode;
    type: "primary" | "secondary";
    onReset?: () => void;
    onGuess?: () => void;
}

function Button({ children, type, onReset, onGuess }: ButtonI) {
    if (type === "primary")
        return (
            <View style={[styles.outerButton, styles.OuterPButton]}>
                <Pressable
                    onPress={onGuess}
                    android_ripple={{ color: colors["green-600"] }}
                    style={({ pressed }) =>
                        pressed
                            ? [styles.innerButton, styles.pressedIOS]
                            : [styles.innerButton]
                    }
                >
                    <Text style={[styles.textLabel, styles.PTextLabel]}>
                        {children}
                    </Text>
                </Pressable>
            </View>
        );

    if (type === "secondary")
        return (
            <View style={[styles.outerButton, styles.OuterSButton]}>
                <Pressable
                    onPress={onReset}
                    android_ripple={{ color: colors["green-700"] }}
                    style={({ pressed }) =>
                        pressed
                            ? [styles.innerButton, styles.pressedIOS]
                            : [styles.innerButton]
                    }
                >
                    <Text style={[styles.textLabel, styles.STextLabel]}>
                        {children}
                    </Text>
                </Pressable>
            </View>
        );
}

const styles = StyleSheet.create({
    outerButton: {
        flex: 1,
    },

    innerButton: { paddingBlock: 12, overflow: "hidden" },

    pressedIOS: { opacity: 0.75 },

    OuterPButton: {
        backgroundColor: colors["green-400"],
        borderRadius: 4,
        borderColor: "transparent",
        borderWidth: 2,
    },

    OuterSButton: {
        borderWidth: 2,
        borderColor: colors["green-400"],
        borderRadius: 4,
    },

    textLabel: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 600,
        fontFamily: "open-sans",
    },

    PTextLabel: {
        color: colors.white,
    },

    STextLabel: {
        color: colors["green-300"],
    },
});

export default Button;
