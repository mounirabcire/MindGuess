import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

import colors from "../../utils/colors";

interface TitleI {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

function Title({ children, style }: TitleI) {
    return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: "center",
        fontFamily: "open-sans-bold",
        // color: colors["green-800"],
    },
});

export default Title;
