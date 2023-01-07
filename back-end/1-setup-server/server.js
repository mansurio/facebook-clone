const express = require("express")

const app = express()


// todo -- routes --
app.get("/",(req,res) => {
    res.send("welcome from home")
})

app.get("/book", (req,res) => {
    res.send("welcome from book")
})

// todo -- Server --
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})