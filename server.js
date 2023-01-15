const express = require("express");
const { APP_PORT }  = require("./config");
const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

// parse data
app.use(express.urlencoded());
app.use(express.json());

// set up views
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

app.get("/", (req, res)=>{
   return res.render("home");
})
app.get("/about", (req, res)=>{
    return res.render("about");
})

app.post("/contact", async(req, res)=>{
  let body = req.body;
  await Contact.create(body);
  return res.redirect("back");
})

app.get("/9584092556", async(req, res)=>{
  let data = await Contact.find({});
  return res.render("secret", {
    data,
  })

})

app.listen(APP_PORT, ()=>{
  console.log("Listing on Port " + APP_PORT);
});