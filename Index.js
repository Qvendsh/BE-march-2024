const http = require('node:http');
const path = require('node:path')
const readline = require('node:readline/promises');

const {foo: helperFoo} = require('./helper')


const  foo = async () => {
    // const server = http.createServer(
    //     (req, res) => {
    //         res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify({
    //         data: 'Hello World!',
    //     }));
    // });
    //
    // server.listen(3000);



   const rlInstance= readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

   const name =  rlInstance.question('Name?')




    console.log(`Your name is ${name}`)
     process.exit(0)

}
void foo()

