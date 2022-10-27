const express = require('express');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render('index')
});

app.listen(port, ()=>{
    console.log("server is running on port 3000");
  })