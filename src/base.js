import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHkjpAM3JSGaW9JwzsC3-lOS1jd0SmslQ",
  authDomain: "style-sheets-7cbb3.firebaseapp.com",
  databaseURL: "https://style-sheets-7cbb3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export

export default base;
