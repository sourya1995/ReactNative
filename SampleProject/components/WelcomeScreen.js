import { useState } from "react";
import { View } from "react-native/types";

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = useState('');
    return (
        <ScrollView indicatorStyle={"white"} style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Little Lemon
            </Text>
            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a
                lively but casual environment. We would love to hear your experience with us!
            </Text>
            <TextInput style={styles.inputBox} value={firstName} onChangeText={onChangeFirstName} placeholder={'First Name'} />

           
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
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12, 
        padding: 10,
        borderWidth: 1,
        fontSize: 16,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
    },
});