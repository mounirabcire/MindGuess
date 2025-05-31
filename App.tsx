import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame.screen";
import MiddleGame from "./screens/MiddleGame.screen";

const diceBg = require("./assets/images/dices.jpg");

export default function App() {
    const [pickedNumber, setPickedNumber] = useState<number | null>(null);

    let screen;
    pickedNumber
        ? (screen = <MiddleGame />)
        : (screen = <StartGame onPickNumber={setPickedNumber} />);

    // let screen = <StartGame onPickNumber={setPickedNumber} />;
    // if(pickedNumber)
    //     screen = <MiddleGame />

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
                <SafeAreaView style={styles.appContainer}>
                    {screen}
                </SafeAreaView>
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
