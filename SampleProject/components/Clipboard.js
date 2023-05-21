import { useClipboard } from '@react-native-community/hooks'


export default function Clipboard() {
    const [data, setString] = useClipboard();
    return (
        <>
            <Text>{data}</Text>
            <Button title='Update Clipboard' onPress={() => setString('new clipboard data')}>Set Clipboard</Button>
        </>)
}

