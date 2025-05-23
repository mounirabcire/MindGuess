import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";

function StartGame() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <View>
                <Button>Guess</Button>
                <Button>Reset</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 80,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#FED766",
        borderRadius: 12,
        elevation: 4,
        shadowColor: "gray",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: 0.47,
    },
});

export default StartGame;
