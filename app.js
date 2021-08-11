const express = require('express');
const connectDB = require("./config/db")
const books = require ("./routes/api/books")
const cors = require ("cors")

const app = express();

//connecting the database:
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
// app.use("/api",routes)
app.use("/api/books",books)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));