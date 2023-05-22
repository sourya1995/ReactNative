import { useState } from "react";
import { View } from "react-native/types";

export default function WelcomeScreen() {
    const [firstName, onChangeFirstName] = useState('');
    const colorScheme = useColorScheme();
    return (
        <ScrollView indicatorStyle={"white"} style={[styles.container, colorScheme === 'light' ? {backgroundColor: '#fff'} :{ backgroundColor: '#333333'}, ]}>
            <View style={styles.headerWrapper}>
                <Image style={styles.image} source={require('./img/logo.png')} resizeMode="cover" accessible={true} accessibilityLabel={'Little Lemon Logo'} />
                <Text style={[styles.headerText, colorScheme === 'light' ? {color: '#333333'} :{ color: '#EDEFEE'}, ]}>
                    Welcome to Little Lemon
                </Text>
            </View>
            <Text style={[styles.regularText,  colorScheme === 'light' ? {color: '#333333'} :{ color: '#EDEFEE'}, ]}>
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
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
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
    image: {

        width: 100,
        height: 100,
        borderRadius: 20,
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