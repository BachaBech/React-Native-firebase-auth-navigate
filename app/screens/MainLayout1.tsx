import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../Firebase'; 

interface RouterProp {
  navigation: NavigationProp<any, any>;
}

const MainLayout1 = ({ navigation }: RouterProp) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onPress={() => navigation.navigate("Side1")}
        title="Open Side"
      />
      <Button
        onPress={() => 
        FIREBASE_AUTH.signOut()}
        title="Logout" 
      />
    </View>
  );
};

export default MainLayout1;
