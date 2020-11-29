import React, { useState } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';


export default function main ({navigation}) {
    //price will store the final price after discount
    //discount is the amount of money saved after discount
    const [discount,setDiscount]=useState(0);
    const [price,setPrice]=useState(0);

    const onClick=() =>{
      navigation.navigate('result',{finalprice: Math.round(price-((discount/100)*price)), saved: Math.round((discount/100)*price)});
    }
  
    return (
      <ImageBackground style={styles.container}  source={require("../assets/images/discount.jpg")}>
        <View style={styles.section}>
        <Text style={styles.text} onC>Enter Discount Percentage:</Text>
        <TextInput style={styles.input}onChangeText={(value) => setDiscount(value)}/>
        <Text style={styles.text}>Enter Total Price:</Text>
        <TextInput style={styles.input}onChangeText={(value) => setPrice(value)}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={onClick}><Text style={styles.btntext}>Calculate</Text></TouchableOpacity>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "auto",
      width: 800,
      opacity: 0.9
    },
    input: {
      borderWidth: 1.5,
      borderColor: "black",
      width: 350,
      height: 50,
      fontSize: 30,
      paddingLeft: 20
    },
    text:{
      marginTop: 30,
      fontSize: 31,
      fontWeight: "bold",
      color: "black"
    },
    button:{
      margin: 30,
      width:350,
      backgroundColor: "#ff781f",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.9,
      borderRadius: 5
    },
    btntext: {
      fontSize: 30,
      padding: 20,
      fontWeight: "bold",
      color: "black"
      
    },
    section: {
      paddingLeft: 10,
      paddingTop: 40,
    },
  });