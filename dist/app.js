"use strict";

var _sha = _interopRequireDefault(require("crypto-js/sha256"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Step 1: Verify 'crypto-js' module is installed for your project
 * After verifying it is installed, move on to Step 2. No code needs to be written here.
 */

/**
 * Step 2: Import from crypto-js module the sha265 library
 */

/**
 * Variables: Do not change variable values to be able to answer the quiz
 */
var data1 = "Blockchain Rock!";
var dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3)
};
/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {
  return (0, _sha["default"])(JSON.stringify(obj));
}

console.log("SHA256 Hash: ".concat(generateHash(data1)));
console.log("************************************");
console.log("SHA256 Hash: ".concat(generateHash(dataObject)));
/**
 * Run your application using `node app.js`
 */