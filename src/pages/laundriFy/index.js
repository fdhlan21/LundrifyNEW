import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Back, BoubleChat, Clear_100, LaundriFyIcon, Location_0_2, Rate4_1_100, RiviewChat_3, Riviewchat_1, Riviewchat_2, Service, WeLaundry } from '../../assets';
import colors from '../../utils/colors/colors';
const HalamanLaundriFy = ({navigation}) => {
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
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Detail</Text>
</View>
</View>

<View style={{padding:20}}>




<View style={{marginTop:0}}>
    <View style={{marginTop:0}}>
<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={() => navigation.navigate('HalamanMaps')}>
    <Image style={{height:46, width:198}} source={LaundriFyIcon} />
 
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('HalamanChat')} style={{left:80}}>
   <Image source={BoubleChat} style={{height:36, width:36, }}/>
    </TouchableOpacity>
 
    </View>

</View>


</View>

<View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:colors.backgroundLaundrify, padding:1, width:'100%', marginTop:10}}>

<Image style={{width:46, height:30}} source={Rate4_1_100}/>
<Image style={{width:66, height:30}} source={Clear_100}/>
<TouchableOpacity onPress={() => navigation.navigate('HalamanMaps')}>
<Image style={{width:48, height:30}} source={Location_0_2}/>
</TouchableOpacity>

</View>
<View style={{padding:10, marginTop:10}}>
<Image style={{width:313, height:96}} source={WeLaundry}/>
</View>

<View style={{padding:10, marginTop:10}}>
<Image style={{width:313, height:96}} source={Service}/>
</View>

<View style={{paddding:10, marginTop:10,}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12}}>Their Review</Text>
      <Text style={{fontFamily:'Poppins-Regular', fontSize:12}}>See more</Text>
</View>
<ScrollView style={{padding:0}} horizontal showsHorizontalScrollIndicator={false}>
<View style={{padding:10}}>
<Image style={{width:256, height:106}} source={Riviewchat_1} />
</View>
<View style={{padding:10}}>
<Image style={{width:256, height:106}} source={Riviewchat_2} />
</View>
<View style={{padding:10}}>
<Image style={{width:256, height:106,}} source={RiviewChat_3} />
</View>
</ScrollView>
</View>

<View style={{marginTop:'45%'}}>
<TouchableOpacity onPress={() => navigation.navigate('HalamanWash')} style={{padding:10, backgroundColor:colors.primary, borderRadius:20,}}>
<Text style={{color:'white', fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Wash Now</Text>
</TouchableOpacity>
</View>
</View>


</ScrollView>   
    </View>
  )
}

export default HalamanLaundriFy

const styles = StyleSheet.create({})