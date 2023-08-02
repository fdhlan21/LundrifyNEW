import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, OrderDetails, Ordering } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanPay = ({navigation}) => {
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
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Ordering Details</Text>
</View>
</View>

<View style={{padding:10}}>
<View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, color:colors.primary}}>Pay</Text>
<TouchableOpacity onPress={() => navigation.navigate('HalamanStatus')}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:10, color:colors.primary}}>View Details</Text>
</TouchableOpacity>

</View>
<View style={{alignItems:'center'}}>
<Image style={{width:359, height:498}} source={OrderDetails}/>
</View>
<TouchableOpacity onPress={() => navigation.navigate('HalamanPaySuccess')} style={{padding:10, backgroundColor:colors.primary, marginTop:'30%',  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Pay Now</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanPay

const styles = StyleSheet.create({})