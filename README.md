# KeyHelper

This is a helper function, which will mask API keys so that they don't have to be stored as is.

It is purely intended for front-end projects, and should not be used for trying to encrypt sensitive information. It is not a replacement for good backend security, but will - at least - modify the API key for Interactive Front End applications.

To use it:

Dowload the `helper.js` file and upload it to your project. We'll assume it is in the _js_ directory.<br>
In the `<head>` of your web page, place the following line:<br>
`<script src="js/helper.js"></script>`<br>
To create an obfuscated version of your key, put the following code in your main JavaScript file:<br>
```javascript
let API_KEY = "yourAPIkey";
console.log(API_KEY.keyHelper());
// Outputs "NehbllrxVC"
```
Then check the developer tools console for the obfuscated key. Copy this and paste it into your API key field.
To get the original key back, simply call the `keyHelper()` method again like so:
```javascript
let API_KEY = "NehbllrxVC".keyHelper();
console.log(API_KEY);
// Outputs "yourAPIkey"
```