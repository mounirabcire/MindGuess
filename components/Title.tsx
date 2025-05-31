import React from "react";
import { Text, StyleSheet } from "react-native";

interface TitleI {
    children: React.ReactNode;
}

function Title({ children }: TitleI) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: "center",
        color: "#FE4A49",
        fontWeight: 900,
    },
});

export default Title;
