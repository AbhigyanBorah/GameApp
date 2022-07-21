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
        // borderWidth: Platform.OS==='android'?2:0,
        // borderWidth: Platform.select({ios:0,android:2}),
        borderColor: Colors.plumDark,
        padding: 12,
        maxWidth: '80%',
        marginTop: 32
    }
});