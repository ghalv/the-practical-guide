import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...courseGoals, enteredGoalText, ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Ditt svar" onChangeText={goalInputHandler} />
        <Button title="Send" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
	  {courseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>)}
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
  },
  goalItem: {
	margin: 8,
	padding: 8,
	borderRadius: 6,
	backgroundColor: '#00263e',
	color: 'white'
  }
});
