import fs from 'fs'

const path = '../me.txt';

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
});