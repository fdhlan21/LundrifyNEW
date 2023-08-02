import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Back, BottomArrow, Hide, ShowPassword } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanRegister = ({navigation}) => {

const [passwordVisible, setPasswordVisible] = useState(false);

const [passwordVisible2, setPasswordVisible2] = useState(false);


// const [form, setForm] = useState({
//   phone: '',
//   name: '',
//   password: '',
// });

const Show = () => {
<Image source={ShowPassword} style={{height:20, width:20}}/>
}


// const handleRegister = () => {
// if ((form.phone.length == 0 ) || (form.name.length == 0) || (form.password.length == 0)) {
// alert('Semua feild harus di isi!');
// } else if (form.phone.length <12) {
//   alert('NO Hp tidak boleh kurang dari 12 nomor!');
// } else if (form.phone.length >12) {
//   alert('NO Hp tidak boleh lenih dari 12 nomor!')
// } else {
// console.log(form);
// alert('Selamat Datang!');
// navigation.replace('HalamanMainPage');
// }

// }

  return (
    <View style={{flex:1, backgroundColor:'white', }}>
    <ScrollView>
   <View style={{padding:30, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
<Image source={Back} style={{height:15, width:15}} />
<Text style={{fontFamily:'Poppins-SemiBold', }}>Registration</Text>
   </View>
   <View style={{padding:30, bottom:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:24, color:colors.primary}}>Create Account</Text>
<Text style={{fontFamily:'Poppins-Regular', fontSize:13, color:colors.primary}}>Create your account</Text>

<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20}}>Phone Number</Text>

<View style={{

 flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
borderColor:'#C7C9CA',
  paddingRight: 10,
  paddingLeft: 10,
  marginTop: 10,
    
}}>
<Text style={{fontFamily:'Poppins-Regular', color:colors.primary}}>+62</Text>
<Image style={{width:17, height:17, left:2}} source={BottomArrow} />
<TextInput style={{backgroundColor:'#fff',   flex: 1,
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12, paddingRight:20, paddingLeft:20}} placeholder='Mobile Number' placeholderTextColor='gray' 
     />
      
</View>



<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20}}>Name</Text>

<View style={{

 flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
borderColor:'#C7C9CA',
  paddingRight: 10,
  paddingLeft: 10,
  marginTop: 10,
    
}}>

<TextInput style={{backgroundColor:'#fff',   flex: 1,
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12, paddingRight:10, paddingLeft:10}} placeholder='Enter Name' placeholderTextColor='gray' 
       />
      
</View>



<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20}}>Password</Text>

<View style={{

 flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
borderColor:'#C7C9CA',
  paddingRight: 10,
  paddingLeft: 10,
  marginTop: 10,
    
}}>

<TextInput style={{backgroundColor:'#fff',   flex: 1,
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12, paddingRight:10, paddingLeft:10}} placeholder='Enter Password' placeholderTextColor='gray' 
      
     secureTextEntry={!passwordVisible}  />
     <TouchableOpacity onPress={() => setPasswordVisible((prev => !prev))}>
<Image style={{width:21, height:21, }} source={passwordVisible ? ShowPassword : Hide} />
     </TouchableOpacity>
      
</View>



<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20}}>Confirm Password</Text>

<View style={{

 flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
borderColor:'#C7C9CA',
  paddingRight: 10,
  paddingLeft: 10,
  marginTop: 10,
    
}}>

<TextInput style={{backgroundColor:'#fff',   flex: 1,
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 12, paddingRight:10, paddingLeft:10}} placeholder='Confirm Password' placeholderTextColor='gray' 
   
     secureTextEntry={!passwordVisible2}  />
      <TouchableOpacity  onPress={() => setPasswordVisible2((prev => !prev))}>
<Image style={{width:21, height:21}} source={passwordVisible2 ? ShowPassword : Hide} />
     </TouchableOpacity>
      
</View>

<TouchableOpacity onPress={() => navigation.navigate('HalamanMainPage')} style={{padding:10, backgroundColor:colors.primary, borderRadius:20, marginTop:'45%'}}>
    <Text style={{fontFamily:'Poppins-SemiBold', color:'white', textAlign:'center'}}>Sign Up</Text>
</TouchableOpacity>

   </View>
   </ScrollView>
    </View>
  )
}

export default HalamanRegister

const styles = StyleSheet.create({})