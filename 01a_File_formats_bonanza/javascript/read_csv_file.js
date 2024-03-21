import csv from 'csvtojson'

const path = '../me.csv';

csv().fromFile(path).then((jsonObj) => {
    console.log(jsonObj);
})
.catch((err) => {
    console.error(err);
});