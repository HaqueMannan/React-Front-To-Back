import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Custom Reducers:
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';


//Add Firebase to WebApp
const firebaseConfig = {
   apiKey: "AIzaSyC96Y1J1NBkW100CNNWc3DOSOP1aWkjWLk",
   authDomain: "reactclientpanel-a7e47.firebaseapp.com",
   databaseURL: "https://reactclientpanel-a7e47.firebaseio.com",
   projectId: "reactclientpanel-a7e47",
   storageBucket: "reactclientpanel-a7e47.appspot.com",
   messagingSenderId: "1033169405825"
};

// react-redux-firebase config
const rrfConfig = {
   userProfile: 'users',
   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
   reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
   reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   notify: notifyReducer,
   settings: settingsReducer
});

//Check for settings in localStorage
if(localStorage.getItem('settings') === null ) {
   //Default Settings
   const defaultSettings = {
      disableBalanceOnAdd: true,
      disableBalanceOnEdit: false,
      allowRegistration: false
   };

   //Set to localStorage
   localStorage.setItem('settings', JSON.stringify(defaultSettings));
};

// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

//Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
   reactReduxFirebase(firebase), 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;