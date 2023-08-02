import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, CameraChat, EmoteChat, IsiChatLoundrify, ProfileChatBawahLoundrify, ProfileChatLoundify, SendChat } from '../../assets'

const HalamanChat = ({navigation}) => {
  const BackPage = () => {
        navigation.navigate('HalamanMessage')
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
     <View style={{padding:10}}>
<View style={{flexDirection:'row', padding:20}}>
<TouchableOpacity onPress={BackPage}>
 <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
 <Image style={{width:96, height:29, left:20, bottom:6}} source={ProfileChatLoundify}/>
 <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, left:140}}>Chat</Text>
</View>
<ScrollView>

<View style={{alignItems:'center', marginTop:'10%'}}>
    <Image style={{width:202, height:154,}} source={ProfileChatBawahLoundrify}  />
</View>

<View style={{alignItems:'center', marginTop:'20%'}}>
    <Image style={{width:312, height:333,}} source={IsiChatLoundrify}  />
</View>
</ScrollView>

<View style={{padding:10, flexDirection:'row', marginTop:'13%'}}>

<View style={{

 flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 20,
  borderWidth: 1,
borderColor:'black',
  paddingRight: 10,
  paddingLeft: 10,
  marginTop: 10,
  height:40,
  width:246,
    
}}>

<Image style={{width:15, height:15}} source={EmoteChat} />
<TextInput style={{backgroundColor:'#fff',   flex: 1,
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12, paddingRight:10, paddingLeft:10, padding:0, top:1}} placeholder='Ketik Pesan...' placeholderTextColor='gray' 
   />
      
     
      
</View>
<View style={{padding:10, marginTop:6}}>

<TouchableOpacity>
  <Image source={CameraChat} style={{width:25, height:25}} />
</TouchableOpacity>
</View>

<View style={{padding:10, marginTop:6, right:10}}>

<TouchableOpacity>
  <Image source={SendChat} style={{width:25, height:25}} />
</TouchableOpacity>
</View>
</View>



     </View>
     </ScrollView>
    </View>
  )
}

export default HalamanChat

const styles = StyleSheet.create({})