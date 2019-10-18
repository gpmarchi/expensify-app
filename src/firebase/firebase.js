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

database
  .ref()
  .set({
    name: "Gustavo Marchi",
    age: 38,
    isSingle: true,
    location: {
      city: "São Paulo",
      country: "Brasil"
    }
  })
  .then(() => {
    console.log("Data saved!");
  })
  .catch(error => {
    console.log(error);
  });

// database.ref().set("This is my data.");

// database.ref("age").set(39);
// database.ref("location/city").set("Rio de Janeiro");

database
  .ref("attributes")
  .set({
    height: "1.90 m",
    weight: "500 kg"
  })
  .then(() => {
    console.log("Data saved!");
  })
  .catch(error => {
    console.log(error);
  });
