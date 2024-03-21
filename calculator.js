

//Backend Part
<script>
    const app = express();

// Use body-parser middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result is " + result);
});

app.listen(3000, function () {
  console.log("Server is running in port 3000.");
});
</script>
