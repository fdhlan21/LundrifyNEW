import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AftrerRadioButton, Back, BackRight, BeforeRadioButton, BottomArrow, GoldWallet, InfoCircle, LaundrifyDetailsOrder, MinButton, PlusButton, Wallet } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanWash = ({navigation}) => {
    const BackPage = () => {
        navigation.goBack()
    }

    const [radioButton, setRadioButton] = useState(false);
    const [radioButton2, setRadioButton2] = useState(false);
    const [radioButton3, setRadioButton3] = useState(false);
    const [radioButton4, setRadioButton4] = useState(false);
    const [radioButton5, setRadioButton5] = useState(false);
    const [radioButton6, setRadioButton6] = useState(false);
    const [radioButton7, setRadioButton7] = useState(false);
    const [radioButton8, setRadioButton8] = useState(false);
    const [radioButton9, setRadioButton9] = useState(false);

     const [selectedButton, setSelectedButton] = useState(null);

    const handleRadioButonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex)
    }

    const isButtonSelected = (buttonIndex) => selectedButton === buttonIndex;

    const [selectedPayment, setSelectedPayment] = useState(null)
    const handleButtonPayment = (buttonIndex) => {
      setSelectedPayment(buttonIndex === selectedPayment ? null : buttonIndex)
    }
    const isButtonPaymentSelected = (buttonIndex) => selectedPayment === buttonIndex;

  
    const [selectedWallet, setSelectedWallet] = useState(null);
    const handleWalletButton = (buttonIndex) => {
      setSelectedWallet(buttonIndex === selectedWallet ? null : buttonIndex)
    }
    const isWalletSelected = (buttonIndex) => selectedWallet === buttonIndex;

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Ordering</Text>
</View>
</View>

<View style={{padding:10}}>
<View style={{padding:0, margin:10}}>

<Text style={{color:colors.primary, fontFamily:'Poppins-Regular', fontSize:12, }}>Ordering Details</Text>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
  <Image style={{ width:128, height:40,}} source={LaundrifyDetailsOrder}/>
  <TouchableOpacity>
<Image style={{height:18, width:18,}} source={BackRight}/>
  </TouchableOpacity>
  </View>
<Text style={{color:colors.primary, marginTop:20, fontFamily:'Poppins-SemiBold',}}>Add Details</Text>
<View style={{flexDirection:'row',}}>
<Image style={{height:15, width:15,}} source={InfoCircle}/>
<Text style={{fontFamily:'Poppins-Regular', fontSize:8, padding:2}}>You can pick multiple service</Text>
</View>

<View>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10,  }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>1 Hour Clean</Text>
</View>

<View style={{padding:10,  flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>Rp12.000</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleRadioButonClick(1)}>
<Image style={{height:14, width:14, }} source={isButtonSelected(1) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>

</View>
  </View>
</View>

<View style={{marginTop:10}}>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10,  }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>3 Hour Clean</Text>
</View>

<View style={{padding:10,  flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10,}}>Rp10.000</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleRadioButonClick(2)}>
<Image style={{height:14, width:14,  }} source={isButtonSelected(2) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>


  </View>
</View>


<View style={{marginTop:10}}>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10, }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>Express (6 Hour clean)</Text>
</View>

<View style={{padding:10,  flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>Rp7.000</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleRadioButonClick(3)}>
<Image style={{height:14, width:14,  }} source={isButtonSelected(3) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>


  </View>
</View>


<View style={{marginTop:10}}>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10, }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>1 Day Clean</Text>
</View>

<View style={{padding:10,  flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>Rp4.000</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleRadioButonClick(4)}>
<Image style={{height:14, width:14,  }} source={isButtonSelected(4) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>


  </View>
</View>

<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20,}}>Laundry weight</Text>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10, }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>Total Weight (kg)</Text>
</View>

<View style={{flexDirection:'row', padding:10,}}>
<TouchableOpacity>
<Image style={{height:15, width:15}} source={MinButton}/>
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, marginLeft:5,}}>0</Text>
<TouchableOpacity style={{marginLeft:5}}>
<Image style={{height:15, width:15}} source={PlusButton}/>
</TouchableOpacity>
</View>

</View>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10,}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>Let Courier Count</Text>
</View>

<View style={{flexDirection:'row', padding:10, }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, marginLeft:5,}}>Free</Text>
<TouchableOpacity onPress={() => setRadioButton5((prev => !prev))} style={{marginLeft:5}}>
<Image style={{height:15, width:15}} source={radioButton5 ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>

</View>

<Text style={{fontFamily:'Poppins-SemiBold', color:colors.primary, marginTop:20,}}>Delivery and payment</Text>


  <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>

<View style={{padding:10,}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, }}>Address</Text>
</View>


<View style={{padding:10, width:182}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10 }}>
  <Text style={{fontFamily:'Poppins-SemiBold'}}>Micheal</Text> {'\n'}
  +62 081234567 {'\n'}
  Jl Raya Bojongsoang gang.habluminanas Rt 
  03/04 No.34, Kab Bandung, Jawa Barat
</Text>
</View>



<View style={{padding:10, }}>
<TouchableOpacity>
<View style={{padding:10, backgroundColor:'#E2F6FF', borderRadius:10, height:16 }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:8, height:16, textAlign:'center', padding:0, margin:0, top:-5, color:colors.primary}}>Change</Text>
</View>
</TouchableOpacity>
</View>


  </View>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10,}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>By Your Self</Text>
</View>

<View style={{flexDirection:'row', padding:10, }}>

<TouchableOpacity style={{left:5}} onPress={() => handleButtonPayment(1)}>
<Image style={{height:14, width:14, }} source={isButtonPaymentSelected(1) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>

</View>

</View>



<View style={{flexDirection:'row', justifyContent:'space-between'}}>

<View style={{padding:10,}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10}}>Free Delivery</Text>
</View>

<View style={{flexDirection:'row', padding:10, }}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, marginLeft:5,}}>Free</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleButtonPayment(2)}>
<Image style={{height:14, width:14, }} source={isButtonPaymentSelected(2) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>

</View>

</View>

<View style={{flexDirection:'row', padding:10}}>
<Image style={{width:15, height:15}} source={InfoCircle}/>
<Text style={{fontFamily:'Poppins-Regular', fontSize:8, padding:2}}>Need to wait until courier counting your laundry weight</Text>
</View>

<View style={{padding:0}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<View style={{padding:10, flexDirection:'row', justifyContent:'space-around',}}>
<Image style={{width:20, height:19}} source={Wallet}/> 
<Text style={{fontFamily:'Poppins-Regular', fontSize:12, marginLeft:5}}>Gopai</Text>
<Image style={{tintColor:'#000000', height:15, width:15, marginLeft:5}} source={BottomArrow}/>
</View>

<View style={{padding:10,  flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, marginLeft:5,}}>84.000</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleWalletButton(1)}>
<Image style={{height:14, width:14, }} source={isWalletSelected(1) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>
</View>
</View>


<View style={{padding:0}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<View style={{padding:10,  flexDirection:'row', justifyContent:'space-around',}}>
<Image style={{width:20, height:19,}} source={GoldWallet}/> 
<Text style={{fontFamily:'Poppins-Regular', fontSize:12, marginLeft:5}}>Cash</Text>
</View>

<View style={{padding:10, flexDirection:'row'}}>
<Text style={{fontFamily:'Poppins-Regular', fontSize:10, marginLeft:5,}}>Counting</Text>
<TouchableOpacity style={{left:5}} onPress={() => handleWalletButton(2)}>
<Image style={{height:14, width:14, }} source={isWalletSelected(2) ? AftrerRadioButton : BeforeRadioButton}/>
</TouchableOpacity>
</View>
</View>
</View>
</View>
<TouchableOpacity onPress={() => navigation.navigate('HalamanPay')} style={{padding:10, backgroundColor:colors.primary, marginTop:30,  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Order</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanWash

const styles = StyleSheet.create({})