// Import Statements
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/routes.api");
const colors = require("colors")
dotenv.config();

// Constants
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

// Listening
const port = process.env.PORT || 3000;
const mode = !!parseInt(process.env.PRODMODE) ? 'Production' : "Development";
const mongoUri = mode === 'Production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/mendDB';

(async () => {
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(port, () => {
            console.log(`[SERVER] Listening On Port ${port} In ${mode} Mode`.yellow.underline);
        })
    } catch (error) {
        console.log(error.message);
        console.log("[ERROR] Something Went Wrong! Debug Quick!".red)
    }
})()