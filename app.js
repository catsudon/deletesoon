var firebaseConfig = {
  apiKey: "AIzaSyCoUr0d59hu_SVijm0id5k94LHxmf5l3SE",
  authDomain: "lol-psvupr.firebaseapp.com",
  databaseURL: "https://lol-psvupr.firebaseio.com",
  projectId: "lol-psvupr",
  storageBucket: "lol-psvupr.appspot.com",
  messagingSenderId: "406651171272",
  appId: "1:406651171272:web:e60ae151f8524122ccd0fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var database = firebase.database();
var aqours = 0;
var firebaseRef = firebase.database().ref("aqours/temp");

window.onload= changeTemp();

function changeTemp(){
  setInterval(function(){

    firebaseRef = firebase.database().ref("aqours/temp");
    firebaseRef.once("value").then(function(dataSnapshot){
      console.log(dataSnapshot.val());
      aqours = (dataSnapshot.val()+1.2).toFixed(2);
      // showData(aqours);
      document.querySelector("h2").innerHTML = aqours+" °C";

  }, 2000)

  })
};
// 
//
// $("button").click(function(){
//   changeTemp();
// });
