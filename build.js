const fs = require("fs")

if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build');
}
fs.writeFile('./build/example.js', "console.log('hello world')", (err) => {
    console.error(err);
});