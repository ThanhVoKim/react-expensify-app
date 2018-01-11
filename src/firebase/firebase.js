import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// == CREAT OBJECT DATA WITH UNIQUE ID == //
// database.ref('expenses').push({
//   description: 'Phone',
//   note: '',
//   amount: 10000,
//   createdAt: 0
// });

// CREAT ARRAY FROM OBJECT DATA
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// // show child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // show child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // show child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// SET //
// database.ref().set({
//   name: 'Thanh',
//   age: 22,
//   job: {
//     company: 'Amazon',
//     title: 'Software Development'
//   },
//   location: {
//     city: 'Da Lat',
//     country: 'VietNam'
//   },
//   streetLevel: 9
// });

// UPDATE //
// database.ref('attribute').update({
//   height: 165,
//   weight: 50
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Failed connect database', error);
// });

// DELETE //
// database.ref('location/city').remove().then(() => {
//   console.log('Data is remove');
// }).catch((error) => {
//   console.log('Failed connect database', error);
// });

// READ  //
// database.ref().on('value', (snapshot) => {
//   const print = snapshot.val();
//   console.log(`${print.name} is a ${print.job.title} at ${print.job.company}`);
// });

