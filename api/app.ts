import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 7001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server Working !!');
});

app.post('/addTask',(req,res)=>{
 var task = req.body;
 console.log(task)
  return res.status(200).json({status:true})
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});