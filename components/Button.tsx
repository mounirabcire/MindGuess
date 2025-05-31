import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonI {
    children: string;
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
                    android_ripple={{ color: "#219fb3" }}
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
                    android_ripple={{ color: "#2d7a85" }}
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
        backgroundColor: "#2AB7CA",
        borderRadius: 4,
        borderColor: "transparent",
        borderWidth: 2,
    },

    OuterSButton: {
        borderWidth: 2,
        borderColor: "#2AB7CA",
        borderRadius: 4,
    },

    textLabel: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 600,
    },

    PTextLabel: {
        color: "#E6E6EA",
    },

    STextLabel: {
        color: "#57def0",
    },
});

export default Button;
