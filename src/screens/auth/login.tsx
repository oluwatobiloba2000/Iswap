import React from 'react';
import {AuthLayout, Button, Input} from '../../components';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function LoginPage() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <AuthLayout title="Login">
          <Input placeholder="email" />
          <Input placeholder="password" secureTextEntry />

          <Button status="primary">Submit</Button>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
}
