const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the file name? ', (filename) => {
    console.log('You said: ' + filename)
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message)
            return;
        }
        console.log('By God... I have FOUND IT!')
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    });
});