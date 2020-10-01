// Require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Create express server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Point to server routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Set up DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

// Start server
app.listen(PORT, function() {
    console.log(`App listening on port ${PORT} at http://localhost:${PORT}`);
});