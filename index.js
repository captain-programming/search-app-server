const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnects");
const AdsRouter = require("./routes/ads.routes");

const server = express();

//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}))

//routes
server.get("/", (req, res)=>{
  res.send("Welcome search app");
});

server.use("/ads", AdsRouter)

const PORT = process.env.PORT || 8080;

server.listen(PORT, async() => {
  await dbConnect();
  console.log("Server started at port 8080")
})