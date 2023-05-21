import { useEffect } from "react";
import { View } from "react-native/types";

export default JSON = () => {
    const [myJSON, setJsonObj] = useState([]);

    const convertStringToJson = () => {
        const myStr =
            '[
        {
            "name": "Veggie Kabob",
                "price": "$12",
                    "type": "Main Dish"
        },
        {
            "name": "Greek Salad",
                "price": "$7",
                    "type": "Side"
        },
        {
            "name": "Black Tea",
                "price": "$3",
                    "type": "Drink"
        }
                ]';

    const result = JSON.parse(myStr);
    setJsonObj(result);
}

useEffect(() => { convertStringToJson(); }, []);

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Little Lemon</Text>
        {myJSON && (
            <View style={styles.innerContainer}>
                <Text style={styles.itemText}>{'Menu Item' + myJSON.name}</Text>
                <Text {styles.itemText}>{'Price: ' + myJSON.price}</Text>
                <Text {styles.itemText}>{'Type:' + myJSON.type}</Text>
            </View>
        )}
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4CE14',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#F4CE14',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#495E57',
        fontSize: 22,
    },
    headerText: {
        color: '#495E57',
        fontSize: 30,
        textAlign: 'center',
    },
});