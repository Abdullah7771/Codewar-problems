

var Converter = {
  toAscii: function (hex) {
    var ascii = "";
    for (let i = 0; i < hex.length; i+=2) {
      const hexpair = hex.substr(i, 2);

      ascii += String.fromCharCode(parseInt(hexpair, 16));
    }
    return ascii;
  },
  toHex: function (ascii) {
    var hex = "";

    for (let i = 0; i < ascii.length; i++) {
      const hexChar = ascii.charCodeAt(i).toString(16);
      hex += hexChar;
    }
    // console.log(hex)
    return hex;
  },
};

console.log(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473"));
console.log(Converter.toHex("Look mom, no hands"));
