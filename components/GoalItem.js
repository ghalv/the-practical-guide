import { StyleSheet } from 'react-native';

function GoalItem() {
  return (
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
 );
}

export default GoalItem;

const styles = StyleSheet.create({});
