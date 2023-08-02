import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, OrderDetails, Ordering, ProgresStatus } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanStatus = ({navigation}) => {
    const BackPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Progres Status</Text>
</View>
</View>

<View style={{padding:10}}>

<View style={{alignItems:'center', marginTop:20}}>
<Image style={{width:359, height:498}} source={ProgresStatus}/>
</View>
<TouchableOpacity onPress={() => navigation.navigate('HalamanPaySuccess')} style={{padding:10, backgroundColor:colors.primary, marginTop:'42%',  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Pay Now</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanStatus

const styles = StyleSheet.create({})