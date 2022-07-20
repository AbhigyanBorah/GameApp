import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
Colors;

function InstructionText({children, style}) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.yellowDark,
        fontSize: 20,
    },
});