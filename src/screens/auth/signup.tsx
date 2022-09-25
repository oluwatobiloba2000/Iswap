import {Input, Button, AuthLayout} from '../../components';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../src/config/firebase';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log({
      email,
      password,
    });

    createUserWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AuthLayout title="SignUp">
          <Input
            placeholder="email"
            onChange={event => setEmail(event.nativeEvent.text)}
          />
          <Input
            placeholder="password"
            secureTextEntry
            onChange={event => setPassword(event.nativeEvent.text)}
          />

          <Button onPress={submit}> Submit </Button>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};
