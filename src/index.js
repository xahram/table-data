const express = require("express")
var bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser.json());
app.use(express.json())
const PORT = process.env.PORT || 9000


app.get('/',()=>{
    console.log("yooo")
    return;
})
app.listen(PORT, () => {
    console.log(`Server Up and Running on Port ${PORT}`)
})