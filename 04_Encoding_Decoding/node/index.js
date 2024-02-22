const base64EncodeString = btoa("Hemmelig besked");

const decodedString = atob(base64EncodeString);

console.log(base64EncodeString);
console.log(decodedString);