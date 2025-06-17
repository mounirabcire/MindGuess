import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Button from "../components/ui/Button";
import { generateRandomBetween } from "../utils/logic";
import colors from "../utils/colors";
import GuessLogItem from "../components/game/GuessLogItem";

interface MiddleGameI {
    userNumber: number;
    onGameOver: (roundsCount: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function MiddleGame({ userNumber, onGameOver }: MiddleGameI) {
    const initialGuessedNumber = generateRandomBetween(1, 100, userNumber);

    const [guessedNumber, setGuessedNumber] = useState(initialGuessedNumber);
    const [guessRounds, setGuessRounds] = useState([initialGuessedNumber]);

    const totalRounds = guessRounds.length;

    function lowerGuessHandler() {
        // 21 > 5
        if (userNumber > guessedNumber) {
            Alert.alert("Sorry!", "I know you're lying!", [
                { text: "Okay", style: "cancel" },
            ]);
            return;
        }

        maxBoundary = guessedNumber;

        const number = generateRandomBetween(
            minBoundary,
            maxBoundary,
            guessedNumber
        );

        setGuessedNumber(number);
        setGuessRounds((prev) => [number, ...prev]);
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

        const number = generateRandomBetween(
            minBoundary,
            maxBoundary,
            guessedNumber
        );

        setGuessedNumber(number);
        setGuessRounds((prev) => [number, ...prev]);
    }

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    useEffect(() => {
        if (userNumber === guessedNumber) onGameOver(guessRounds.length);
    }, [userNumber, guessedNumber]);

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Opponent's guess</Title>

            <NumberContainer>{guessedNumber}</NumberContainer>

            <View>
                <Text style={styles.subText}>Higher or lower?</Text>

                <View style={styles.btnContainer}>
                    <Button type="primary" onGuess={higherGuessHandler}>
                        <AntDesign name="plus" size={24} color="white" />
                    </Button>
                    <Button type="primary" onGuess={lowerGuessHandler}>
                        <AntDesign name="minus" size={24} color="white" />
                    </Button>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={({ item, index }) => (
                        <GuessLogItem
                            roundNumber={totalRounds - index}
                            guess={item}
                        />
                    )}
                    keyExtractor={(item) => item.toString()}
                />
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

    title: {
        fontSize: 26,
        fontFamily: "open-sans",
    },

    subText: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "open-sans",
    },

    listContainer: {
        flex: 1,
        padding: 16,
        paddingBottom: 28,
    },
});

export default MiddleGame;
