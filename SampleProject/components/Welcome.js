import { View } from "react-native/types"

const Welcome = () => {
    return (
          <View style={styles.container}>
            <Image style={styles.logo} source={require('img/littleLemonLogo.png')} />
            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
          </View>
        );
};

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default Welcome;