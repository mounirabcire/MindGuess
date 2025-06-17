import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

interface GuessLogItemI {
    roundNumber: number;
    guess: number;
}

function GuessLogItem({ roundNumber, guess }: GuessLogItemI) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.textBig}>#{roundNumber}</Text>
            <Text style={styles.textSmall}>Opponent's guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#222",
        padding: 8,
        borderRadius: 7,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
    },

    textBig: {
        fontSize: 25,
        color: colors["green-600"],
        marginBottom: 4,
        fontFamily: "open-sans-bold",
    },

    textSmall: {
        fontSize: 18,
        color: colors.white,
        fontFamily: "open-sans",
    },
});

export default GuessLogItem;
