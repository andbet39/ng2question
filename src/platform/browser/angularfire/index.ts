import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';

export const MYFIREBASE_PROVIDERS =
  
  [...FIREBASE_PROVIDERS,
  defaultFirebase('https://ng2question.firebaseio.com/'),
  firebaseAuthConfig({
        provider: AuthProviders.Facebook,
         method:  AuthMethods.Popup
  })]