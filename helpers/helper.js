const func = () => {
    console.log("hello")
    console.log(__dirname)
    console.log(__filename)
    console.log(process.cwd())
}

module.exports ={
    func
}
