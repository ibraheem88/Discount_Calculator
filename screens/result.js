import React, { useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';


export default function result ({navigation}) {
    
  
    return (
      <View style={styles.container}>
        <View style={styles.section}>
        <Text style={styles.text}>Final Price:</Text>
        <Text style={styles.result}>{navigation.getParam('finalprice')}$</Text>
        <Text style={styles.text}>You Saved:</Text>
        <Text style={styles.result}>{navigation.getParam('saved')}$</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    },
    button:{
      margin: 30,
      backgroundColor: "#ff781f",
      alignItems: "center",
      justifyContent: "center"
    },
    btntext: {
      fontSize: 30,
      padding: 20
    },
    section: {
      paddingLeft: 30,
    },
    result: {
      marginTop: 30,
      fontSize: 30,
      textAlign: "center",
    }
  });