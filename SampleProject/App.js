import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#495E57', }}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <View style={{ backgroundColor: '#495E57', }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

