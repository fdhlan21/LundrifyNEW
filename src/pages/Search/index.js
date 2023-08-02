import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Back, IconHomeEmpat, IconHomeKedua, IconHomeKetiga, IconHomeLima, IconHomePertama, Location, Rate4_1, Rate4_2, Rate4_3, Rate4_5, Search, filter } from '../../assets';
const HalamanSearch = ({navigation}) => {
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
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Explore</Text>
</View>
</View>

<View style={{padding:20}}>
<View style={{padding:10, flexDirection:'row', borderWidth:1, borderRadius:20}}>
<Image style={{tintColor:'black', height:18, width:18}} source={Search}/>
<Text style={{fontFamily:'Poppins-Regular', left:10}}>Sukabirus</Text>
</View>

<View style={{flexDirection:'row', top:5}}>
<Image style={{tintColor:'black', height:20, width:20}} source={Location} />
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, top:2}}>Sent to <Text style={{fontFamily:'Poppins-SemiBold'}}> Kosan Michael</Text></Text>
</View>

<View style={{flexDirection:'row', top:10}}>
<Image style={{width:312, height:21}} source={filter}/>
</View>

<View style={{marginTop:20}}>
    <View style={{marginTop:10}}>
    <TouchableOpacity onPress={() => navigation.navigate('HalamanLaundriFy')}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:90, width:312}} source={IconHomePertama} />

    </View>
</TouchableOpacity>
</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:90, width:312}} source={IconHomeKedua} />

    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:90, width:312}} source={IconHomeKetiga} />

    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:90, width:312}} source={IconHomeEmpat} />

    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:90, width:312}} source={IconHomeLima} />

    </View>

</View>
</View>

</View>


</ScrollView>   
    </View>
  )
}

export default HalamanSearch

const styles = StyleSheet.create({})