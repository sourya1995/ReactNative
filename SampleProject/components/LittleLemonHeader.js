import { View, Text } from "react-native/types";

export default function LittleLemonHeader() {
    return (
       
        <View style={ headerStyles.container }>
            <Text style={ headerStyles.headerText } numberOfLines={3}>
                Welcome
                <Text style={ headerStyles.innerText }>Little Lemon</Text>
            </Text>
        </View>
    );
}


const headerStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: '#F4CE14',
    },
    headerText: {
        padding: 40, 
        fontSize: 30, 
        color: 'black',
    },
    innerText: {
        fontWeight: 'bold' 
    }
});
