import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileAvatar } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanProfile = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     
<View style={{flexDirection:'row', justifyContent:'flex-end', padding:10, margin:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Profile</Text>
</View>

<View style={{padding:10}}>
<View style={{padding:10, backgroundColor:'white', borderWidth:1, borderRadius:20, borderColor:colors.primary }}>
  
<View style={{padding:10, alignItems:'center'}}>
<Image style={{width:100, height:100}} source={ProfileAvatar}/>
</View>

<View style={{padding:10}}>

<View style={{padding:10, borderWidth:1, borderColor:colors.primary, borderRadius:10}}>
<Text style={{fontFamily:'Poppins-Regular'}}>Nama : Michael</Text>
</View>

</View>

</View>
</View>


    </View>
  )
}

export default HalamanProfile

const styles = StyleSheet.create({})