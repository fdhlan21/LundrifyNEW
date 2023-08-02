import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const HalamanSplash = ({navigation}) => {
useEffect(()=>{
 setTimeout(()=> {
navigation.replace('HalamanRegister');
 
 }, 2000)
}, []);
  return (
    <View style={{flex:1}}>
   
    <LinearGradient style={{flex:1}}
colors={['#3785A7','rgba(55,133,167,0.5)']}


    >

 <Text style={{fontFamily:'Poppins-Regular', color:'white', fontSize:36, textAlign:'center' ,marginTop:'100%'}}>Laundrify</Text>

    </LinearGradient>
    </View>
  )
}

export default HalamanSplash

const styles = StyleSheet.create({})