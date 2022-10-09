import {Input, Button, AuthLayout} from '../../components';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../src/config/firebase';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colorTheme} from '../../theme';
import {Text} from '@ui-kitten/components';

type ISignupPageProps = {
  navigation: any;
};

export const SignUp = ({navigation}: ISignupPageProps) => {
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
        <AuthLayout
          title="Create An Account"
          titleStyles={styles.authLayoutTitle}>
          <Input
            placeholder="name"
            onChange={event => setEmail(event.nativeEvent.text)}
            status={formErrors.email ? 'danger' : 'basic'}
            onBlur={validate}
          />
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

          <Button style={styles.SignUpBtn} onPress={submit} disabled={isValid}>
            Create account
          </Button>

          <Text style={styles.textCenter} category="c2" status="info">
            or
          </Text>

          <Button status="info" onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  authLayoutTitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: colorTheme.primary,
  },
  SignUpBtn: {
    backgroundColor: colorTheme.primary,
  },
  textCenter: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
