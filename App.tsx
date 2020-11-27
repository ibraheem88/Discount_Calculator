import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Discount Percentage:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Enter Total Price:</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:30
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 350,
    height: 50

  },
  text:{
    marginTop: 30,
    fontSize: 30,
  }
});
