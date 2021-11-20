const express = require("express");
const { createEmp, findEmp, deleteEmp } = require("./controller");
const app = express();
const PORT = 5000
require("./conn");

app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({extended:false}))

app.get("/", async (req, res)=>{
  let emps = await findEmp();
  // console.log(emps);
  res.render("index", {emps: emps});
})

app.post("/", async (req, res)=>{
  console.log(req.body);
  let data = req.body;
  let result = await createEmp(data);
  console.log(result);
  res.redirect("/");
})

app.delete("/:id", async (req, res) => {
  await deleteEmp(req.params.id);
  res.redirect("/")
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});
