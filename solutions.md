## ALTERNATE SOLUTIONS

### Solution 1:
```js
// The global Array
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];
    
    // Add your code below this line 
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    // Add your code above this line 
    
    return newArray;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});
```

### Code Explanation:
- Solve this challenge using a `for` loop and `this`.
- The use of a `for` loop allows us to apply the callback function to every item in the Global array and then push the modified items to the empty new array that is returned in the end.


### REFERENCE LINKS
- [`this` JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [`this` JavaScript W3Schools](https://www.w3schools.com/js/js_this.asp)
- [`for` loop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`Array.prototype` MDN](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)


### Solution 2:
```js
// the global Array
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Add your code below this line
    this.forEach(a => newArray.push(callback(a)));
    // Add your code above this line 
    return newArray;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});
```

### Code Explanation:
- Solve this challenge using `this` and the `forEach` method.
- The `this` keyword gives us access to the object we are calling `myMap` on.
- From there we can use the `forEach` method to add elements to already declared empty array as we modify each element with the given callback method.


### Solution 3:
```js
// The global Array 
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
    return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});
```

### Code Explanation:
- Solve this challeng using recursion


### REFERENCE LINKS
- [MDN: `this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Gentle Explanation of `this` in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
- [MDN: Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

