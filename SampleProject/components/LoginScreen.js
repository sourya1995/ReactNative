import { useState } from "react";
import { ScrollView } from "react-native/types";

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedIn, onLoggedIn] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {loggedIn && <Text style={styles.headerrText}>Login to Continue</Text>}
            {!loggedIn && (
                <>
                    <Text style={styles.regularText}>Login to continue.</Text>
                    <TextInput style={styles.inputBox} value={email} onChangeText={onChangeEmail} placeholder={'email'} keyboardType={'email-address'} />
                    <TextInput value={password} onChangeText={onChangePassword} placeholder={'password'} secureTextEntry={true} />
                    <Pressable onPress={() => onLoggedIn(!loggedIn)} style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>
                </>
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: "#EDEFEE",
        textAlign: "center",
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
    },
    inputBox: {
        height: 40,
        padding: 10,
        margin: 12,
        borderWidth: 1,
        borderColor: "#EDEFEE",
        backgroundColor: '#EDEFEE',
        fontSize: 16
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});