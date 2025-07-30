const fs = require('fs');
const apurba = require('./apurba');
const { default: chalk } = require('chalk');
const http = require('http');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(chalk.green('File contents:' + data));
});

fs.writeFile('output.txt', 'Apurba is a capable student.', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

console.log(chalk.blue(apurba.apurbaTakaWala()));
console.log(chalk.red(apurba.apurbaKipta()));

const apurbaServer = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Apurba\'s world!');
    }else if(req.url === '/apurba') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(apurba.apurbaTakaWala());
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

apurbaServer.listen(4000, () => {
    console.log(chalk.yellow('Server is running on http://localhost:4000'));
})

