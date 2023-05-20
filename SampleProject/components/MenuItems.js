import { ScrollView, View } from "react-native/types";

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
    return( 
        <View style={{ flex: 0.75}}>
            <ScrollView horizontal= {false} indicatorStyle={"white"} style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>
                    View Menu
                </Text>
                <Text style={menuStyles.itemText}>{ menuItemsToDisplay[0] }</Text>
            </ScrollView>
        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: "black",
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 36,
    },
});

