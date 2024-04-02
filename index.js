const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
dotenv.config();
const PORT = process.env.PORT || 4000;

//databse call
//connectDb();

// midleware
app.use(express.json());
app.use(cors());

//user routes
app.use("/api", require("./routs/rout"));

// error handleing
app.get("*", function (req, res) {
  res.send({
    status: false,
    message: "Get product Something wents wrong",
    error: "not found"
  })
});

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
