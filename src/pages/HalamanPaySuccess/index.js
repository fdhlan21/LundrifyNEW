import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, CencelIcon, OrderDetails, Ordering, Payment, ProgresStatus } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanPaySuccess = ({navigation}) => {
    const BackPage = () => {
        navigation.navigate('HalamanMainPage');
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={CencelIcon} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Progres Status</Text>
</View>
</View>

<View style={{padding:10}}>

<View style={{alignItems:'center', marginTop:20}}>
<Image style={{width:359, height:500}} source={Payment}/>
</View>

<TouchableOpacity onPress={() => navigation.navigate('HalamanReview')} style={{padding:10, backgroundColor:'white', marginTop:'25%',  borderRadius:20, borderWidth:1, borderColor:colors.primary}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:colors.primary,}}>give a review</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('HalamanMainPage')} style={{padding:10, backgroundColor:colors.primary, marginTop:'5%',  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Back to Home</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanPaySuccess

const styles = StyleSheet.create({})