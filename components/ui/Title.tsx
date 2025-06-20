import { Text, StyleSheet, StyleProp, TextStyle, Platform } from "react-native";

interface TitleI {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

function Title({ children, style }: TitleI) {
    return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: Platform.OS === "android" ? 32 : 28,
        textAlign: "center",
        fontFamily: "open-sans-bold",
    },
});

export default Title;
