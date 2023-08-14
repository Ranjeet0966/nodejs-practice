//console.log("welcome to coding World")
const fs = require("fs");

//fs.writeFileSync('read.txt',"welcome to Bihar");

fs.writeFileSync('read.txt',"Gopalganj ,  welcome to Bihar");

//fs.appendFileSync('read.txt',"  How are you ?" );

//Node.js includes an additional data type called buffer
// (not available in browser's JavaScript)
// buffer is mainly used to store binary data
//While reading from a file or receving packets over the network.

//const buf_data = fs.readFileSync('read.txt');
//console.log(buf_data);

//org_data = buf_data.toString();
//console.log(org_data);

//to rename
fs.renameSync('read.txt',"readWrite.txt");