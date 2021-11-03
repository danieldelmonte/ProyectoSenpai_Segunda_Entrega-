const express = require("express");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/user.js");
const proyectoRoutes = require("./routes/proyecto");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);
app.use("/proyecto", proyectoRoutes);


app.listen(PORT, function() {
    console.log("App corriendo en el puerto " + PORT);
});