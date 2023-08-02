import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, ChatList, IsiChatLoundrify, LondyChat, ProfileChatBawahLoundrify, ProfileChatLoundify, TexTChat } from '../../assets'

const HalamanMessage = ({navigation}) => {
  const BackPage = () => {
        navigation.navigate('HalamanMainPage')
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
     <View style={{padding:10}}>

<View style={{padding:10,}}>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
 <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
 
 <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, }}>Chat</Text>
</View>
</View>

<View style={{alignItems:'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('HalamanChat')}>
<View style={{padding:10,}}>
<Image style={{width:312, height:42,}} source={LondyChat}/>
</View>
</TouchableOpacity>

<View style={{padding:10, marginTop:10}}>
<Image style={{width:307, height:186,}} source={ChatList}/>
</View>

</View>


     </View>
     </ScrollView>
    </View>
  )
}

export default HalamanMessage

const styles = StyleSheet.create({})