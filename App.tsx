import { StyleSheet, View } from "react-native";

import StartGame from "./screens/startGame.screen";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <StartGame />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#E6E6EA",
        flex: 1,
    },
});

// white E6E6EA
// yellow FED766
// blue 2AB7CA
// red FE4A49
