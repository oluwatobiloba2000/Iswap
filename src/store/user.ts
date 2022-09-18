import {proxy} from 'valtio';
import {User} from '../types';

export const user = proxy<User>({
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  emailVerified: false,
  isAuthenticated: false,
});
