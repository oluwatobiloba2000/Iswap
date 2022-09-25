import React, {useState} from 'react';
import {AuthLayout, Button, Input} from '../../components';
import {SafeAreaView, ScrollView} from 'react-native';
import {Text} from '@ui-kitten/components';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';

type LoginPageProps = {
  navigation: any;
};
export function LoginPage({navigation}: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  const submit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const validate = () => {
    const emailRegex = new RegExp(
      '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
    );
    if (email === '' && !emailRegex.test(email)) {
      setIsValid(false);
      setFormErrors({...formErrors, email: 'Please enter your email.'});
    } else {
      setFormErrors({...formErrors, email: ''});
    }
    if (password === '') {
      setIsValid(false);
      setFormErrors({...formErrors, password: 'Please enter your password.'});
    } else {
      setFormErrors({...formErrors, password: ''});
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AuthLayout title="Login">
          <Input
            placeholder="email"
            onChange={event => setEmail(event.nativeEvent.text)}
            status={formErrors.email ? 'danger' : 'basic'}
            onBlur={validate}
          />
          <Input
            placeholder="password"
            secureTextEntry
            onChange={event => setPassword(event.nativeEvent.text)}
            status={formErrors.password ? 'danger' : 'basic'}
            onBlur={validate}
          />

          <Button onPress={submit} disabled={isValid}>
            Submit
          </Button>
          <Text
            category="c2"
            status="info"
            onPress={() => navigation.navigate('SignUp')}>
            sign Up
          </Text>
          <Text
            category="c2"
            status="info"
            onPress={() => navigation.navigate('Home')}>
            go home
          </Text>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
}
