import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeContainer} from '../../containers';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
