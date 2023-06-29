import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandle = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandle = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandle}
        />
        <Button title="Add Goal" onPress={addGoalHandle} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text style={styles.textInput2} key={goal.id}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: "5%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "purple",
    width: "80%",
    padding: 8,
    marginRight: 3,
  },
  goalsContainer: {
    flex: 3,
  },
  textInput2: {
    color: "red",
    paddingVertical: 4
  },
});
