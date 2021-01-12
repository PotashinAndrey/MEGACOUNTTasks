export default function encodeString(str) {
  if (!str.length) return;

  let encodingString = '';
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      encodingString = encodingString + str[i] + counter;
      counter = 1;
    }
  }

  return encodingString;
}

console.log(encodeString("aaamwwwaabcccc"));
console.log(encodeString("abcdefff"));
console.log(encodeString("abc"));
