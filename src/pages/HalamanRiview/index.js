import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AfterHideNameRiview, Back, BackRight, BeforeHasilRate, BeforeHideNameRiview, CencelIcon, HasilRate, LaundrifyDetailsOrder, OrderDetails, Ordering, RiviewRate } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanRiview = ({navigation}) => {
    const BackPage = () => {
        navigation.navigate('HalamanMainPage');
    }

const [rateHide, setRateHide] = useState(false);
const [nameshow, setNameShow] = useState(false);


  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={CencelIcon} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Rate</Text>
</View>
</View>

<View>
  <View>

  </View>
</View>
<View style={{padding:10}}>

<View style={{margin:0}}>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
  <Image style={{ width:128, height:40,}} source={LaundrifyDetailsOrder}/>
  <TouchableOpacity>
<Image style={{height:18, width:18,}} source={BackRight}/>
  </TouchableOpacity>
  </View>
</View>

<View style={{padding:10, marginTop:20}}>
  <View style={{alignItems:'center'}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15,  color:colors.primary}}>How's the Laundry?</Text>

<TouchableOpacity onPress={() => setRateHide((prev => !prev))}>
  <Image style={{width:209, height:36, marginTop:10,}} source={rateHide ? HasilRate : BeforeHasilRate}/>
</TouchableOpacity>

<Text style={{color:colors.primary, fontFamily:'Poppins-SemiBold', fontSize:15, marginTop:20}}>What about the result?</Text>
  </View>
</View>

<TextInput style={{borderWidth:1, borderColor:'#434343', borderRadius:10, height:114, fontFamily:'Poppins-Regular', color:'black', paddingBottom:70, paddingRight:10, paddingLeft:10,}} placeholder='Pesan ?' placeholderTextColor='gray'/>

<View style={{padding:10, left:-15}}>
  <View style={{flexDirection:'row', padding:10}}>

  <TouchableOpacity onPress={() => setNameShow((prev => !prev))}>   
  <Image style={{height:15, width:15,}} source={nameshow ?  AfterHideNameRiview : BeforeHideNameRiview}/>
  </TouchableOpacity>
  
  <Text style={{fontFamily:'Poppins-Regular', fontSize:12, marginLeft:10}}>Hide name from review </Text>
  </View>
</View>

<TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{padding:10, backgroundColor:colors.primary, marginTop:'80%',  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Send</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanRiview

const styles = StyleSheet.create({})