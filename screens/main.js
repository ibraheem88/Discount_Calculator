import React, { useState } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';


export default function main ({navigation}) {
    //price will store the final price after discount
    //discount is the amount of money saved after discount
    const [discount,setDiscount]=useState(0);
    const [price,setPrice]=useState(0);
    const [finalPrice,setfinalPrice]=useState(0);
    const [saved,setSaved]=useState(0);
    const [item,setItem]=useState([{discount: 0,total: 0,final: 0,key:'1'}]);
    const history={}

    const calculatePrice=()=>{
      setfinalPrice(Math.round(price-((discount/100)*price)));
    }
    const calculateSaved=() =>{
      setSaved(Math.round((discount / 100) * price));
    }
    const totalPrice=(value) =>{
      setDiscount(value);
      calculatePrice();
      calculateSaved();
    }
    const totalSave=(value) =>{
      setPrice(value);
      calculatePrice();
      calculateSaved();
    }
    const addDiscount=() =>{
      setItem([...item,{discount: discount,total: finalPrice,final: saved,key: Math.random().toString()}]);
    }
    const clearDiscount=(key) =>{
      setItem(...item.filter(item => item.key!=key));
    }
    //const onClick=() =>{
    //  navigation.navigate('result',{finalprice: Math.round(price-((discount/100)*price)), saved: Math.round((discount/100)*price)});
     // }
     const onClick=() =>{
      navigation.navigate('result',{item,clearDiscount});
      }
    return (
      
      <ImageBackground style={styles.container}  source={require("../assets/images/discount.jpg")}>
        <View style={styles.section}>
        <Text style={styles.text} >Enter Discount Percentage:</Text>
        <TextInput style={styles.input}onChangeText={totalPrice} maxLength={3} keyboardType={'number-pad'}/>
        <Text style={styles.text}>Enter Total Price:</Text>
        <TextInput style={styles.input}onChangeText={totalSave} />
        <Text style={styles.text}>Final Price:</Text>
        <Text style={styles.input}>{finalPrice}$</Text>
        <Text style={styles.text}>You Saved:</Text>
        <Text style={styles.input}>{saved}$</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={addDiscount}><Text style={styles.btntext}>Save</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onClick}><Text style={styles.btntext}>History</Text></TouchableOpacity>
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
      marginTop: 10,
      marginBottom: 10,
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
    },
  });