"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);



const input = document.querySelector('.buttonCLR--JS');
const textarea = document.querySelector('.textArea--JS');

input.addEventListener('click', function () {
  textarea.value = '';
});


const loadBTN = document.querySelector('.buttonLoad--JS');
const saveBTN = document.querySelector('.buttonSave--JS');

loadBTN.addEventListener('click', function(){
  textarea.value = localStorage.getItem('text');
});

saveBTN.addEventListener('click', function(){

  localStorage.setItem('text', textarea.value);
});
