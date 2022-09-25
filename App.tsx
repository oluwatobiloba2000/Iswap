import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import React from 'react';
import {LoginPage} from './src/screens/auth/login';
import {SignUp} from './src/screens/auth/signup';
import {HomeScreen} from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
