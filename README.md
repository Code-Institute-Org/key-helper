# KeyHelper

This is a helper function, which will encrypt and decrypt API keys so that they don't have to be stored in plaintext.

To use it:

Dowload the `helper.js` file and upload it to your project. We'll assume it is in the _js_ directory.<br>
In the `<head>` of your web page, place the following line:<br>
`<script src="js/helper.js"></script>`<br>
To create an encrypted version of your key, put the following code in your main JavaScript file:<br>
```javascript
let API_KEY = "yourAPIkey";
console.log(API_KEY.keyHelper());
// Outputs "NehbllrxVC"
```
Then check the developer tools console for the encrypted key. Copy this and paste it into your API key field.
To decrypt, simply call the `keyHelper()` method again like so:
```javascript
let API_KEY = "NehbllrxVC".keyHelper();
console.log(API_KEY);
// OUtputs "yourAPIkey"
```