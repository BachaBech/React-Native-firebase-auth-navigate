import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from'@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import Sidelayout from './app/screens/Sidelayout';
import MainLayout1 from './app/screens/MainLayout1';
import { FIREBASE_AUTH } from './Firebase';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function MainLayout() {
  return ( 
    <MainStack.Navigator>
      <Stack.Screen name="Main" component= {MainLayout1}/>
      <Stack.Screen name="Side1" component= {Sidelayout}/>
    </MainStack.Navigator>
  )
}

export default function App() {
  const [user , setUser] = useState<User | null> (null) ;
  useEffect( ()=>{
    onAuthStateChanged (FIREBASE_AUTH, (user)=>setUser(user))
    console.log('user', user);
    setUser(user);
  },[]);
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      {user ? (
        <Stack.Screen name="MainLayout" component= {MainLayout} options={{ headerShown: false }}/>
      ):(
        <Stack.Screen name="Login" component= {Login} options={{ headerShown: false }}/>
      )}
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
