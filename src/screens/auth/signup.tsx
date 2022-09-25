import {Input, Button, AuthLayout} from '../../components';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../src/config/firebase';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  /**
   * TODO: convert to hooks so all forms can use it
   */
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

  const submit = () => {
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
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};
