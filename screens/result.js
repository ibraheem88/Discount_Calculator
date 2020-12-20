import React, { useState} from 'react';
import { Text, View, StyleSheet ,ImageBackground,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import main from '../screens/main';


export default function result ({navigation}) {
    
  
    return (
      <ImageBackground style={styles.container}  source={require("../assets/images/discount.jpg")}>
        <View style={styles.section}>
          <View style={styles.headrow}>
            <Text style={styles.head}>Discount</Text>
            <Text style={styles.head}>Total Price</Text>
            <Text style={styles.head}>Final Price</Text>
          </View>
          <View style={styles.headrow}>
          <FlatList
            data={navigation.getParam('item')}
            renderItem={({item})=>(
            <View style={styles.headrow}>
              <Text style={styles.head}>{item.discount}</Text>
              <Text style={styles.head}>{item.total}</Text>
              <Text style={styles.head}>{item.final}</Text>
              <TouchableOpacity style={styles.clear} onPress={() => navigation.getParam('clearDiscount')(item.key)}><Text>Clear</Text></TouchableOpacity>
            </View>)}
          />
         
          </View>
          

        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.btntext}>Clear All</Text></TouchableOpacity>
       
        </ImageBackground>
    );
  }
  //{navigation.getParam('finalprice')}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "auto",
      width: 800,
      height: null,
      color: "white",
      fontWeight: "bold"
    },
    section: {
      padding: 20
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
    head:{
      fontSize:25,
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "#ff781f",
      borderRadius: 3,
      width: "15%",
      flexDirection: "row",
      paddingLeft:5,
    },
    headrow:{
      flexDirection: "row",
      marginTop: 10
    },
    clear: {
      borderWidth: 2,
      justifyContent: "center",
      color: "red",

    }
  });