import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Button from "../components/ui/Button";
import { generateRandomBetween } from "../utils/logic";

interface MiddleGameI {
    userNumber: number;
    onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function MiddleGame({ userNumber, onGameOver }: MiddleGameI) {
    const initialGuessedNumber = generateRandomBetween(1, 100, userNumber);

    const [guessedNumber, setGuessedNumber] = useState(initialGuessedNumber);
    function lowerGuessHandler() {
        // 21 > 5
        if (userNumber > guessedNumber) {
            Alert.alert("Sorry!", "I know you're lying!", [
                { text: "Okay", style: "cancel" },
            ]);
            return;
        }

        maxBoundary = guessedNumber;

        setGuessedNumber(
            generateRandomBetween(minBoundary, maxBoundary, guessedNumber)
        );
    }

    function higherGuessHandler() {
        // 21 < 90
        if (userNumber < guessedNumber) {
            Alert.alert("Sorry!", "I know you're lying!", [
                { text: "Okay", style: "cancel" },
            ]);
            return;
        }

        minBoundary = guessedNumber;

        setGuessedNumber(
            generateRandomBetween(minBoundary, maxBoundary, guessedNumber)
        );
    }

    useEffect(() => {
        if (userNumber === guessedNumber) onGameOver();
    }, [userNumber, guessedNumber]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>

            <NumberContainer>{guessedNumber}</NumberContainer>

            <View>
                <Text style={styles.subText}>Higher or lower?</Text>

                <View style={styles.btnContainer}>
                    <Button type="primary" onGuess={higherGuessHandler}>
                        +
                    </Button>
                    <Button type="primary" onGuess={lowerGuessHandler}>
                        -
                    </Button>
                </View>
            </View>
            <View>
                <Text>Log rounds</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginInline: 16,
        padding: 16,
        flex: 1,
    },

    btnContainer: {
        marginTop: 24,
        flexDirection: "row",
        gap: 16,
    },

    subText: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 24,
    },
});

export default MiddleGame;
