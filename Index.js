const http = require("node:http")
const path = require("node:path")
const readLine = require("node:readline/promises")
const fsPromise = require("node:fs/promises")
const EventEmitter =require('node:events')

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


    // const rlInstance = readLine.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question("name?")
    // console.log(`your name is ${name}`)
    // process.exit(0)

    // const pathToFile = path.join(__dirname, 'text.txt')
    // await fsPromise.writeFile(pathToFile, "hello qvend\n")
    // const data = await fsPromise.readFile(pathToFile, 'utf-8')
    // console.log(data)
    // await fsPromise.mkdir(path.join(__dirname, "new-folder"), {recursive:true})
    //
    // await fsPromise.rename(pathToFile, path.join(__dirname, "new-named-text.txt"))

    const emitter = new EventEmitter()

    emitter.once('event2', ()=>{
        console.log('event 1 done')
    })
    emitter.on('event2', ()=>{
        console.log('event 2 done')
    })

    emitter.emit('event2')
    emitter.emit('event2')

}

void foo()