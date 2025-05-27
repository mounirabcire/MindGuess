import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/startGame.screen";

const diceBg = require("./assets/images/dices.jpg");

export default function App() {
    return (
        <LinearGradient
            style={styles.appContainer}
            colors={["#6eeafa", "#E6E6EA"]}
        >
            <ImageBackground
                style={styles.appContainer}
                source={diceBg}
                resizeMode="cover"
                imageStyle={styles.bgImageStyle}
            >
                <StartGame />
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },

    bgImageStyle: {
        opacity: 0.2,
    },
});

// white E6E6EA
// yellow FED766
// blue 2AB7CA
// red FE4A49
