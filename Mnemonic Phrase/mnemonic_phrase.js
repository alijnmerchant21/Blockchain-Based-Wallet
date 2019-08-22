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
    return (parseInt(hex, 16).toString(2)).padStart(4, '0');
}

var original_binary_value = ""
hex_value.split("").forEach(str => {
  original_binary_value += hex2bin(str)
})

//Calculate SHA-256

var sha256 = require('js-sha256');
var sha256_hex_value = sha256(hex_value);

//Select first value SHA-256 and convert into binary

var first_value = sha256_hex_value.charAt(0)
var first_value_binary = hex2bin(first_value);

//Append the binary value into original binary value.

var appended_binary = original_binary_value.concat(first_value_binary);


//Split the binary into groups of 11 and convert into decimal.

var to_decimal = []; // Array to store all decimal values.

var to_decimal_1 = appended_binary.substr(0, 11);
to_decimal_1 = parseInt(to_decimal_1, 2);
to_decimal.push(to_decimal_1);

var to_decimal_2 = appended_binary.substr(11, 11);
to_decimal_2 = parseInt(to_decimal_2, 2);
to_decimal.push(to_decimal_2);

var to_decimal_3 = appended_binary.substr(22, 11);
to_decimal_3 = parseInt(to_decimal_3, 2);
to_decimal.push(to_decimal_3);

var to_decimal_4 = appended_binary.substr(33, 11);
to_decimal_4 = parseInt(to_decimal_4, 2);
to_decimal.push(to_decimal_4);

var to_decimal_5 = appended_binary.substr(44, 11);
to_decimal_5 = parseInt(to_decimal_5, 2);
to_decimal.push(to_decimal_5);

var to_decimal_6 = appended_binary.substr(55, 11);
to_decimal_6 = parseInt(to_decimal_6, 2);
to_decimal.push(to_decimal_6);

var to_decimal_7 = appended_binary.substr(66, 11);
to_decimal_7 = parseInt(to_decimal_7, 2);
to_decimal.push(to_decimal_7);

var to_decimal_8 = appended_binary.substr(77, 11);
to_decimal_8 = parseInt(to_decimal_8, 2);
to_decimal.push(to_decimal_8);

var to_decimal_9 = appended_binary.substr(88, 11);
to_decimal_9 = parseInt(to_decimal_9, 2);
to_decimal.push(to_decimal_9);

var to_decimal_10 = appended_binary.substr(99, 11);
to_decimal_10 = parseInt(to_decimal_10, 2);
to_decimal.push(to_decimal_10);

var to_decimal_11 = appended_binary.substr(110, 11);
to_decimal_11 = parseInt(to_decimal_11, 2);
to_decimal.push(to_decimal_11);

var to_decimal_12 = appended_binary.substr(121, 11);
to_decimal_12 = parseInt(to_decimal_12, 2);
to_decimal.push(to_decimal_12);


//Read File from local directory.

const fs = require('fs') // Reading file from local assets.
var list = fs.readFileSync('assets/bip39-wordlist.txt', 'utf-8');
var word_list = list.split("\n"); // Store the string file in an array.

//Generating 12 word phrase.

var mnemonic_phrase = [];
var m;

	for(var i=0;i<12;i++)
	{
	m = to_decimal[i];
	mnemonic_phrase.push(word_list[m]);
	}

/*console.log("Word List is:")
for(var i=0;i<12;i++)
{
console.log(mnemonic_phrase[i]);
}*/

