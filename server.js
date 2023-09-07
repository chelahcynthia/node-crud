const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Node Api')
})

app.get('/blog/', (req, res) => {
    res.send('Hello Blog, My name is Chelah')
})

app.listen(3000, () => {
    console.log("node api is running on port 3000");
});


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://chelah:2379@cluster0.ube6ozj.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})

