import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzAocKalgZoYyQJWPE51hYGLoQ7lWZUhU",
  authDomain: "expensify-1b9c2.firebaseapp.com",
  databaseURL: "https://expensify-1b9c2.firebaseio.com",
  projectId: "expensify-1b9c2",
  storageBucket: "expensify-1b9c2.appspot.com",
  messagingSenderId: "142200494228",
  appId: "1:142200494228:web:b51558cd90ddd7aafa3c81"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref("expenses").push({
//   description: "Something else",
//   note: "Some other expenses",
//   amount: 12398204832,
//   createdAt: 500000002093482039
// });
