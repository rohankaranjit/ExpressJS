import express from "express";
 
const app = express();
const port = 3000;

function logger(req,res,next) {
  console.log("Request Method is", req.method)
  console.log("Request URL is" , req.url);
  next();
};

app.use(logger);


