import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const firebaseConfig = {
    // Your Firebase project configuration
    apiKey: "AIzaSyDrUN_FEwAo-Wf2nKirc8AU0mMWOf0kJgM",
    authDomain: "portfolio-d5782.firebaseapp.com",
    databaseURL: "https://portfolio-d5782-default-rtdb.firebaseio.com",
    projectId: "portfolio-d5782",
    storageBucket: "portfolio-d5782.appspot.com",
    messagingSenderId: "1036193806181",
    appId: "1:1036193806181:web:f59d88c245355a7e17938c",
    measurementId: "G-Z2EDCNJ3KV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const form = document.getElementById('message-form');
  const database = firebase.database();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
  
    // Get the form data
    const userInput = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
  
    // Store the user input in the Firebase Realtime Database
    database.ref('userInputs').push(userInput)
      .then(() => {
        // Success! User input is stored in the database.
        form.reset(); // Optionally, reset the form after submission.
        showConfirmationMessage();
      })
      .catch((error) => {
        // Handle errors if any occur.
        console.error('Error storing user input:', error);
      });
  });
  
  function showConfirmationMessage() {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = 'Thank you for your submission!';
    confirmationMessage.classList.add('confirmation-message');
    form.parentNode.appendChild(confirmationMessage);
  
    setTimeout(() => {
      confirmationMessage.remove();
    }, 5000); // 5000 milliseconds = 5 seconds
  }