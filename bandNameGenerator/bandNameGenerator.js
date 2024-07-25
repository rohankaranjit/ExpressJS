import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const _dirName =dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended : true}));

var bandName = "";
