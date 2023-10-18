import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  function goalInputHandler() {};
  function addGoalHandler() {};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Ditt navn" />
        <Button title="Send" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Liste over navn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 24,
	borderBottomWidth: 1,
	borderBottomColor: '#cccccc'
  },
  textInput: {
	borderWidth: 1,
	borderColor: '#cccccc',
	width: '70%',
	marginRight: 8,
	padding: 8
  },
  goalsContainer: {
	flex: 5
  }
});
