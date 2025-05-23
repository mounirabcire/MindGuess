import { Text, View } from "react-native";

interface ButtonI {
    children: string;
}

function Button({ children }: ButtonI) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

export default Button;
