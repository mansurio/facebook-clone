const express = require("express")
const {readdirSync} = require("fs")
const cors = require("cors")
const app = express()
const options = {
    origin: "http://localhost:3000",
    useSuccessStatus:200

}
app.use(cors(options))


// todo -- dynamic routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)))




// todo -- Server --
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})