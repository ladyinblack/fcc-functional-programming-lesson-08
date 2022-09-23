// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Implement map on a Prototype</h1>`;

/** TODO:
 * Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().  You should not use the built-in map method.  The Array instance can be accessed in the myMap method using this.
 * 
 // The global variable
 const s = [23, 65, 98, 5];
 
 Array.prototype.myMap = function(callback) {
   const newArray = [];
   // Only change code below this line 
 
   // Only change code above this line
   return newArray;
 };
 
 const new_s = s.myMap(function(item) {
   return item * 2;
 });
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line

  this.forEach((c) => {
    newArray.push(callback(c));
  });

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
