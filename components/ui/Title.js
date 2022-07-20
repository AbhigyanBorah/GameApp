import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        color: Colors.plumDark,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: Colors.plumDark,
        padding: 12,
    }
});