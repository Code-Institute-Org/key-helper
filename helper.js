// keyHelper - a helper function for Code Institute students
// Matt Rudge
// See the README.md file for usage instructions
// (c) Code Institute, 2020

String.prototype.keyHelper = function() {

  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var c = "";

  for (var i = 0; i < this.length; i++) {
    if (a.indexOf(this[i]) == -1) {
      c += this[i];
    } else {
      p = a.indexOf(this[i]);
      c += "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[p];
    }
  }
  
  let h = parseInt(c.length / 2) + c.length % 2;
  c = c.substr(h) + c.substr(0, h);
  
  return c.split("").reverse().join("");
}