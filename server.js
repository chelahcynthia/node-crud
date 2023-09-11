const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes
app.get('/', (req, res) => {
    res.send('Hello Node Api')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Chelah')
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//  update a product
app.put('/products/:id',async(req,res) => {
    try {

    } catch (error) {
        res.status(500).json({message: error.message
        });

    }
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

