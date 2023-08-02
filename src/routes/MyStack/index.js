// In MyStack.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HalamanHistory from '../../pages/History';
import HalamanMainPage from '../../pages/MainPage';
import HalamanMessage from '../../pages/Message';
import HalamanProfile from '../../pages/Profile';
import HalamanRegister from '../../pages/Register';
import HalamanSplash from '../../pages/Splash';
import HalamanSearch from '../../pages/Search';
import HalamanLaundriFy from '../../pages/laundriFy';
import HalamanMaps from '../../pages/History/HalamanMaps';
import HalamanChat from '../../pages/HalamanChat';
import HalamanWash from '../../pages/HalamanWahsNow';
import HalamanPay from '../../pages/HalamanPayNow';
import HalamanStatus from '../../pages/HalamanStatus';
import HalamanPaySuccess from '../../pages/HalamanPaySuccess';
import HalamanRiview from '../../pages/HalamanRiview';
import { Histrory, Home, Message, Profile } from '../../assets';
import { Image, Text, View } from 'react-native';
import colors from '../../utils/colors/colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
    }}>
      <Tab.Screen name="Home" component={HalamanMainPage} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Home} style={{width:30, height:30, tintColor: focused ? colors.primary : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? colors.primary : '#dedede', textAlign:'center'}}>Home</Text>
    </View>

  )}}/>
      <Tab.Screen name="Message" component={HalamanMessage} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Message} style={{width:30, height:30, tintColor: focused ? colors.primary : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? colors.primary : '#dedede', textAlign:'center'}}>Chat</Text>
    </View>

  )}}/>
        <Tab.Screen name="History" component={HalamanHistory} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Histrory} style={{width:30, height:30, tintColor: focused ? colors.primary : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? colors.primary : '#dedede', textAlign:'center'}}>History</Text>
    </View>

  )}}/>
          <Tab.Screen name="Profile" component={HalamanProfile} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Profile} style={{width:30, height:30, tintColor: focused ? colors.primary : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? colors.primary : '#dedede', textAlign:'center'}}>Home</Text>
    </View>

  )}}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
  
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{headerShown:false}} />
          <Stack.Screen name="HalamanRegister" component={HalamanRegister} options={{headerShown:false}} />
            <Stack.Screen name="HalamanMainPage" component={MyTabs} options={{headerShown:false}} />
             <Stack.Screen name="HalamanSearch" component={HalamanSearch} options={{headerShown:false}} />
               <Stack.Screen name="HalamanLaundriFy" component={HalamanLaundriFy} options={{headerShown:false}} />
                <Stack.Screen name="HalamanMaps" component={HalamanMaps} options={{headerShown:false}} />
                  <Stack.Screen name="HalamanChat" component={HalamanChat} options={{headerShown:false}} />
                   <Stack.Screen name="HalamanWash" component={HalamanWash} options={{headerShown:false}} />
                    <Stack.Screen name="HalamanPay" component={HalamanPay} options={{headerShown:false}} />
                      <Stack.Screen name="HalamanStatus" component={HalamanStatus} options={{headerShown:false}} />
                        <Stack.Screen name="HalamanPaySuccess" component={HalamanPaySuccess} options={{headerShown:false}} />
                         <Stack.Screen name="HalamanReview" component={HalamanRiview} options={{headerShown:false}} />
                            <Stack.Screen name="HalamanHistory" component={HalamanHistory} options={{headerShown:false}} />
                              <Stack.Screen name="HalamanMessage" component={HalamanMessage} options={{headerShown:false}} />
      </Stack.Navigator>
  
  );
}

export default MyStack