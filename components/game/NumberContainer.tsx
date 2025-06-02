import { View, Text, StyleSheet } from "react-native";

import colors from "../../utils/colors";

interface NumberContainerI {
    children: React.ReactNode;
}

function NumberContainer({ children }: NumberContainerI) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        padding: 32,
        backgroundColor: colors["green-600"],
        borderRadius: 4,
    },

    text: {
        textAlign: "center",
        color: colors.white,
        fontSize: 32,
        fontFamily: "open-sans",
    },
});

export default NumberContainer;
