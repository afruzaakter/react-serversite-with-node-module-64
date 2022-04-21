
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Look me!I can code node now')
});
const users = [
    {id: 1, name: 'Sabana', email: 'sabana@mail.com', phone: '0174252525'},
    {id: 2, name: 'mala', email: 'mala@mail.com', phone: '0174252525'},
    {id: 3, name: 'Rani begum', email: 'ranibegum@mail.com', phone: '0174252525'},
    {id: 4, name: 'Sohana', email: 'sahana@mail.com', phone: '0174252525'},
    {id: 5, name: 'Sabnur', email: 'sabnur@mail.com', phone: '0174252525'},
    {id: 6, name: 'suchorita', email: 'suchorita@mail.com', phone: '0174252525'},
]


// app.get('/users',(req,res) =>{
    // res.send({id: 1, name: 'Abdul alim', job: 'Khai shudhu halim'});
    // res.send(users)
// })
 // filter by search query parameter
 app.get('/users', (req, res) =>{
     if(req.query.name){
         const search = req.query.name.toLowerCase();
         const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
         res.send(matched);
     }
     else{
         res.send(users);
     }
 });
app.get('/user/:id',(req, res)=>{

    console.log(req.params);
    // const id = req.params.id;
        //or
    // const user = users[id];
    // const user = users.find(u => u.id == id);
          //or
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user',(req, res) =>{
    console.log('request',req.body);
    const user = req.body;
     user.id = users.length +1;
    users.push(user);
    res.send(user);

})



app.listen(port,() =>{
    console.log('Listening to port', port);
})



