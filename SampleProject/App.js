import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={ styles.container }>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.container.backgroundColor}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});

