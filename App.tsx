import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGame from "./screens/StartGame.screen";
import MiddleGame from "./screens/MiddleGame.screen";
import EndGame from "./screens/EndGame.screen";

import Title from "./components/ui/Title";

const diceBg = require("./assets/images/dices.jpg");

export default function App() {
    const [pickedNumber, setPickedNumber] = useState<number | null>(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [roundsCount, setRoundsCount] = useState(0);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    function handleStartNewGame() {
        setPickedNumber(null);
        setRoundsCount(0);
        setIsGameOver(false);
    }

    function handleGameOver(roundsCount: number) {
        setIsGameOver(true);
        setRoundsCount(roundsCount);
    }

    if (!fontsLoaded) return <AppLoading />;

    let screen;

    pickedNumber
        ? (screen = (
              <MiddleGame
                  userNumber={pickedNumber}
                  onGameOver={handleGameOver}
              />
          ))
        : (screen = <StartGame onPickNumber={setPickedNumber} />);

    if (isGameOver)
        screen = (
            <EndGame
                pickedNumber={pickedNumber as number}
                onStartNewGame={handleStartNewGame}
                roundsNumber={roundsCount}
            />
        );

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
                <SafeAreaView style={[styles.appContainer, styles.safeArea]}>
                    <Title>Guess My Number</Title>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        gap: 24,
    },

    safeArea: {
        marginTop: 80,
    },

    bgImageStyle: {
        opacity: 0.2,
    },
});
