/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let newArray = [];

let aleatorio = function() {
  for (a = 0; a < pronoun.length; a++) {
    for (b = 0; b < adj.length; b++) {
      for (c = 0; c < noun.length; c++) {
        newArray.push(`${pronoun[a]}${adj[b]}${noun[c]}.com`);
      }
    }
  }
};
aleatorio();
console.log(newArray);
