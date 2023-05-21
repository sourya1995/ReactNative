import { ScrollView, useColorScheme, useWindowDimensions } from "react-native/types"

const Welcome = () => {
    const colorScheme = useColorScheme();
    const window = useWindowDimensions();
    return (
          <ScrollView style={[styles.container, colorScheme === 'light' ? { backgroundColor: '#fff'} : {backgroundColor: '#333333'}, ]}> {''}
            <Image style={styles.logo} source={require('img/littleLemonLogo.png')} 
            resizeMode="center" accessible={true} accessibilityLabel={'Little Lemon Logo'}/>
            <Text style={styles.regular}>Color Scheme: {colorScheme}</Text> {''}
            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Text style={styles.regular}>Window Dimensions</Text> {''}
            <Text style={styles.regular}>Height: {window.height}</Text> {''}
            <Text style={styles.regular}>Width: {window.width}</Text> {''}
            <Text style={styles.regular}>Font Scale: {window.fontScale}</Text> {''}
            <Image style={styles.image} source={require('img/Picture1.png')} resizeMode="cover" accessible={true}
            accessibilityLabel={'Little Lemon Logo'}/>
            <Image style={styles.image} source={require('img/Picture2.png')} resizeMode="cover" accessible={true}
            accessibilityLabel={'Little Lemon Logo'}/>
            <Image style={styles.image} source={require('img/Picture3.png')} resizeMode="cover" accessible={true}
            accessibilityLabel={'Little Lemon Logo'}/>
            <Image style={styles.image} source={require('img/Picture4.png')} resizeMode="cover" accessible={true}
            accessibilityLabel={'Little Lemon Logo'}/>

          </ScrollView>
        );
};

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
        resizeMode: 'contain'
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    regular: {
        fontSize: 18,
        textAlign: 'center',
    }
});

export default Welcome;