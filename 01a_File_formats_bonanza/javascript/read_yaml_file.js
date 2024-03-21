import fs from 'fs'
import yaml from 'js-yaml'


const fileContents = fs.readFileSync('../me.yaml', 'utf8');
const data = yaml.load(fileContents);

console.log(data);
console.log('Name:', data.name);
console.log('Age:', data.age);
console.log('Hobbies:', data.hobbies.join(', '));