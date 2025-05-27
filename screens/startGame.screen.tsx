import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";

import Button from "../components/Button";

const DEF_INP = "00";

function StartGame() {
    const [input, setInput] = useState<string | undefined>(DEF_INP);

    const handleChangeInput = (text: string) => {
        setInput(text);
    };

    const handleGuessBtn = () => {};

    const handleResetBtn = () => {
        setInput(DEF_INP);
        Keyboard.dismiss();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputNumber}
                keyboardType="number-pad"
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                value={input}
                onChangeText={handleChangeInput}
                clearTextOnFocus={true}
            />
            <View style={styles.btnContainer}>
                <Button type="primary">Guess</Button>
                <Button type="secondary" onReset={handleResetBtn}>
                    Reset
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginInline: 16,
        marginTop: 80,
        padding: 16,
        backgroundColor: "#1f8f9e",
        borderRadius: 20,
        elevation: 4,
        shadowColor: "gray",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        gap: 32,
        alignItems: "center",
    },

    inputNumber: {
        borderBottomWidth: 2,
        borderBottomColor: "#E6E6EA",
        color: "#E6E6EA",
        fontSize: 32,
        width: 60,
        textAlign: "center",
        paddingBottom: 8,
    },

    btnContainer: {
        flexDirection: "row",
        gap: 16,
    },
});

export default StartGame;
