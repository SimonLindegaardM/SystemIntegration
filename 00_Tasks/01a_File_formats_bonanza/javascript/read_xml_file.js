import fs from 'fs';
import xm12js from 'xml2js';

const parser = new xm12js.Parser();

fs.readFile('../me.xml', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    parser.parseString(data, (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
            return;
        }
        
        console.log(result);
        console.log('Name:', result.me.name[0]);
        console.log('Age:', result.me.age[0]);
        console.log('Hobbies:', result.me.hobbies[0].hobby);
    });
});