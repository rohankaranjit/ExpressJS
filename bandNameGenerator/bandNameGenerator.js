import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const _dirName =dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended : true}));

var bandName = "";

function bandNameGenerated(req,res,next){
  const street = req.body["street"];
  const pet = req.body["pet"];

  bandName = street + pet;
  console.log(req.body);
  next();
}
app.use(bandNameGenerated);
app.get("/",(req,res)=>{
  res.sendFile(_dirName + "/public/index.html")
});
