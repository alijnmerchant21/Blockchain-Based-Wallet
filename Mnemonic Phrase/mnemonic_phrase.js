/* Procedure:

	1. Select 32 random hex value.
	2. Convert the hex into binary.
	3. Calculate SHA-256 for the hex.
	4. Select the first value from SHA-256 and convert into binary.
	5. Append the binary value into the orignal binary.
	6. Split the binary into 11 bits.
	7. Split the binary into groups of 11 bits.
	8. Convert the binary into equivalent decimal.
	9. Look up for equivalent words for the decimal.
*/


// Select 32 Random hex values. For this iteration we will use hard coded values.
var crypto = require("crypto");
var hex_value = crypto.randomBytes(16).toString('hex');

// Convert the hex values into equivalent binary number.
function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(4, '0');}
var original_binary_value = ""
hex_value.split("").forEach(str => {
  original_binary_value += hex2bin(str)})

//Calculate SHA-256
var sha256 = require('js-sha256');
var sha256_hex_value = sha256(hex_value);

//Select first value SHA-256 and convert into binary
var first_value = sha256_hex_value.charAt(0)
var first_value_binary = hex2bin(first_value);

//Append the binary value into original binary value.
var appended_binary = original_binary_value.concat(first_value_binary);

//Read File from local directory.
const fs = require('fs') // Reading file from local assets.
var list = fs.readFileSync('assets/bip39-wordlist.txt', 'utf-8');
var word_list = list.split("\n"); // Store the string file in an array.

//Split the binary into 11 and convert into decimal and generating 12 word phrase.
var appended_binary_string = appended_binary.toString(); // Convert array into string.
var appended_binary_sub_string = [], to_decimal = [], mnemonic_phrase = [];
var j=0;

for(var i=0;i<12;i++)
{
	appended_binary_sub_string = appended_binary_string.substr(j,11);
	j=j+11;
	to_decimal.push(parseInt(appended_binary_sub_string,2));
	mnemonic_phrase.push(word_list[to_decimal[i]]);
	console.log(mnemonic_phrase[i]);
}

console.log(mnemonic_phrase.length)

