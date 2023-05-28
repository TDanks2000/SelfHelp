import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        HomeScreent
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
