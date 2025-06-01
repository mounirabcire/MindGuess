import { Text, StyleSheet } from "react-native";

import colors from "../../utils/colors";

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
        fontWeight: 900,
        // color: colors["green-800"],
    },
});

export default Title;
