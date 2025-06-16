import { Image, StyleSheet, Text, View } from "react-native";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import colors from "../utils/colors";

interface EndGameI {
    roundsNumber: number;
    pickedNumber: number;
    onStartNewGame: () => void;
}

function EndGame({ roundsNumber, pickedNumber, onStartNewGame }: EndGameI) {
    return (
        <View>
            <Title style={{ color: colors.red }}>Game Over!</Title>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                />
            </View>

            <Text style={styles.text}>
                You needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
                round to guess the number{" "}
                <Text style={styles.highlight}>{pickedNumber}</Text>.
            </Text>

            <View style={styles.btnContainer}>
                <Button type="primary" onGuess={onStartNewGame}>
                    Start New Game
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        margin: 24,
        marginInline: "auto",
        width: 150,
        height: 150,
        borderRadius: 150,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.yellow,
    },

    image: {
        width: "100%",
        height: "100%",
    },

    text: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: "open-sans",
        marginBottom: 16,
    },

    highlight: {
        fontFamily: "open-sans-bold",
        color: colors["green-800"],
    },

    btnContainer: {
        marginTop: 24,
        flexDirection: "row",
        gap: 16,
        marginInline: 64
    },
});

export default EndGame;
