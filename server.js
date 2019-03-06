const express = require('express');
const app = express();

  // http://localhost:5000/api/gamers
app.get('/api/gamers', (req, res) =>{
  //real application this data would come from DB
  const gamers = [
    {id: 1, fName: "Joe", lName: "Douglas"},
    {id: 2, fName: "Jared", lName: "Spears"},
    {id: 3, fName: "Peter", lName: "Hickory"},
  ];
  res.json(gamers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));