import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>


      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator 
            // screenOptions={( {route} ) => ({ tabBarIcon: ({size}) => {
            //   let iconName;
            //   if(route.name === 'Welcome'){
            //     iconName = 'ios-home';
            //   } else if (route.name === 'Login'){
            //     iconName = 'ios-enter';
            //   }
            //   return <Ionicons name={iconName} size={size}/>;
            // },
            // })}
            useLegacyImplementation
            initialRouteName='Login'>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});


