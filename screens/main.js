import React, { useState } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Route} from 'react-native';


export default function main ({navigation}) {
    //price will store the final price after discount
    //discount is the amount of money saved after discount
    const [discount,setDiscount]=useState(0);
    const [price,setPrice]=useState(0);

    const onClick=() =>{
      navigation.navigate('result',{finalprice: Math.round(price-((discount/100)*price)), saved: Math.round((discount/100)*price)});
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.section}>
        <Text style={styles.text} onC>Enter Discount Percentage:</Text>
        <TextInput style={styles.input}onChangeText={(value) => setDiscount(value)}/>
        <Text style={styles.text}>Enter Total Price:</Text>
        <TextInput style={styles.input}onChangeText={(value) => setPrice(value)}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={onClick}><Text style={styles.btntext}>Calculate</Text></TouchableOpacity>
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
    }
  });