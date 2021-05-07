const cors = require('cors');
const express = require('express');
const app = express ();
const axios = require ('axios')

app.use(cors());

app.get('/' , async(req, res) => {

    try {
        const {data} = await axios ('https://jsonplaceholder.typicode.com/users');
   console.log(data)


    return res.json(data)

    } catch (error) {
           console.log(erro)

    }
    
});

app.listen(8088, () =>{ console.log('Server running on port 8088')});