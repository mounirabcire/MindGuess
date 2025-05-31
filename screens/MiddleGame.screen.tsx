import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function MiddleGame() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>

            <Text>Guess</Text>
            <View>
                <Text>Higher or lower?</Text>+ -
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
        marginTop: 80,
        padding: 16,
        flex: 1,
    },
});

export default MiddleGame;
