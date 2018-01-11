import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
      console.log(result.user.uid);
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid
      });
    });
  };
};

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT'
    });
  };
};

