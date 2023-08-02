import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LaundrifyRateHistory, LondriFyHistory, Pay_History, PriceTotal, SearchHistory, isiHistory } from '../../assets'

const HalamanHistory = ({navigation}) => {
  return (
    <View style={{flex:1, backroundColor:'white'}}>
      <ScrollView>
        <View style={{flexDirection:'row', padding:10, justifyContent:'flex-end', margin:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15,}}>History</Text>
        </View>

        <View style={{padding:10, marginTop:20}}>
<View style={{alignItems:'center'}}>
<Image style={{width:312, height:78}} source={SearchHistory}/>
</View>
<View style={{borderWidth:1, borderColor:'#C6C6C6', borderRadius:10, margin:10, backgroundColor:'white'}}>
<TouchableOpacity onPress={() => navigation.navigate('HalamanPay')}>
<View style={{marginTop:20, alignItems:'center'}}>
<Image style={{width:280, height:40}} source={LondriFyHistory}/>
</View>
</TouchableOpacity>


<View style={{flexDirection:'row', justifyContent:'space-between', }}>

<Image style={{width:53, height:27, left:35}} source={PriceTotal}/>

<TouchableOpacity onPress={() => navigation.navigate('HalamanPaySuccess')} style={{padding:10, right:10}}>
<Image style={{width:78, height:21}} source={Pay_History}/>
</TouchableOpacity>


</View>
<View style={{margin:20}}>

<View style={{padding:0.5, backgroundColor:'#C6C6C6'}}></View>
<Image style={{width:282, height:36, paddingTop:10, top:10}} source={LaundrifyRateHistory}/>
</View>
</View>

<View style={{top:-60}}>
<View style={{padding:10, margin:20}}>
</View>
<View style={{marginTop:0, alignItems:'center'}}>
<Image style={{width:312, height:312}} source={isiHistory}/>
</View>

</View>
        </View>
      </ScrollView>

    </View>
  )
}

export default HalamanHistory

const styles = StyleSheet.create({})