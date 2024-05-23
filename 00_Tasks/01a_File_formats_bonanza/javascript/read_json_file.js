import fs from 'fs'

fs.readFile('../me.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    const profile = JSON.parse(data);
    console.log(profile);
    console.log('Name:', profile.name);
    console.log('Age:', profile.age);
    console.log('Hobbies:', profile.hobbies.join(', '));
});