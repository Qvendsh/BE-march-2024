const http = require("node:http")
const path = require("node:path")
const readLine = require("node:readline/promises")

const {func: helperfunc} = require("./helpers/helper")

const foo = async () => {
    // const server = http.createServer((req, res)=>{
    //     res.writeHead(200,{'Content-Type': 'application/json'})
    //     res.end(JSON.stringify({
    //         data: 'hello world'
    //         }))
    // })
    // server.listen(3000)

    // const pathToFile = __filename
    // console.log(path.dirname(pathToFile))
    // console.log(pathToFile)
    // console.log(path.extname(pathToFile))
    // console.log(path.basename(pathToFile))
    // console.log(path.parse(pathToFile))


    const rlInstance = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const name = await rlInstance.question("name?")
    console.log(`your name is ${name}`)
    process.exit(0)
}

void foo()