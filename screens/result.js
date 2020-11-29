import React, { useState} from 'react';
import { Text, View, StyleSheet ,ImageBackground} from 'react-native';


export default function result ({navigation}) {
    
  
    return (
      <ImageBackground style={styles.container}  source={require("../assets/images/discount.jpg")}>
        <View style={styles.section}>
        <Text style={styles.text}>Final Price:</Text>
        <Text style={styles.result}>{navigation.getParam('finalprice')}$</Text>
        <Text style={styles.text}>You Saved:</Text>
        <Text style={styles.result}>{navigation.getParam('saved')}$</Text>
        </View>
        </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "auto",
      width: 800,
      height: null,
      color: "white",
      fontWeight: "bold"
    },
    text:{
      marginTop: 30,
      color: "black",
      width: 250,
      fontSize: 35,
      fontWeight: "bold"

    },
    result: {
      marginTop: 30,
      fontSize: 35,
      fontSize: 50,
      color: 'black',
      fontWeight: "bold",
      borderWidth: 1.5,
      width: 350,
      paddingLeft: 20
    },
    section: {
      paddingLeft: 20
    }
  });