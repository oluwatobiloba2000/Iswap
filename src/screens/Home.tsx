import React from 'react';
import {View, Text} from 'react-native';
import {auth} from '../config/firebase';

export const HomeScreen = () => {
  return (
    <View>
      <Text> HomeScreen </Text>
      <Text>
        current user is : {auth.currentUser?.displayName}
        {auth.currentUser?.email}
      </Text>
    </View>
  );
};
