import { useState } from "react";
import {
    Alert,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";

import Button from "../components/ui/Button";
import colors from "../utils/colors";

interface StartGameI {
    onPickNumber: React.Dispatch<React.SetStateAction<number | null>>;
}

const DEF_INP = "00";
const deviceWidth = Dimensions.get("window").width;

function StartGame({ onPickNumber }: StartGameI) {
    const [input, setInput] = useState<string | undefined>(DEF_INP);

    const handleChangeInput = (text: string) => {
        setInput(text);
    };

    const handleGuessBtn = () => {
        const enteredNumber = parseInt(input as string);

        if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "The number has to be between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: () => setInput(""),
                    },
                ]
            );
            return;
        }

        onPickNumber(enteredNumber);
    };

    const handleResetBtn = () => {
        setInput(DEF_INP);
        Keyboard.dismiss();
    };

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Enter a number</Text>
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
                        <Button type="primary" onGuess={handleGuessBtn}>
                            Guess
                        </Button>
                        <Button type="secondary" onReset={handleResetBtn}>
                            Reset
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    inputContainer: {
        marginInline: 16,
        padding: deviceWidth < 380 ? 8 : 16,
        backgroundColor: colors["green-800"],
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
        borderBottomColor: colors.white,
        color: colors.white,
        fontSize: 32,
        fontFamily: "open-sans",
        width: 60,
        textAlign: "center",
        paddingBottom: 8,
    },

    btnContainer: {
        flexDirection: "row",
        gap: 16,
    },

    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: "open-sans",
    },
});

export default StartGame;
