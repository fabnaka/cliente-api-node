import express from 'express'
import chalk from 'chalk'
import { AppDataSource } from './data-source'

const app = express()
app.use(express.json())

// app.get("*", (req, res) => {
//     res.status(505).json({ "message": "Bad Request" })
// })

app.get('/', (req, res) => {
    res.json('')
})

AppDataSource.initialize().then( async () => {
    app.listen(process.env.PORT, () => {
        console.log( chalk.green("Server is running on http://localhost:" + process.env.PORT) );
    })
}).catch(err => {
    console.log(err)
})