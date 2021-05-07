const cors = require('cors');
const express = require('express');
const app = express ();
const axios = require ('axios');
const fetch = require('node-fetch');
const { response } = require('express');

app.use(express.static('public'));
app.use(express.json());

app.use(cors());

app.get('/home' , async(request, response) => {

    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await data.json();
        return response.json( data )
        
    } 
    catch (error) {
           console.log(error.message)
    }
    
});

app.post('/login', async (request, response) => {

    try {
        const data = request.body
        return response.json({ status: `Received repository named ${data.repository}, address: ${data.address}, ${data.city}, ${data.state} from frontend` })
    }
    catch (err) {
        return response.json({ error: "Some error" })
    }
});

app.listen(8088, () =>{ console.log('Server running on port 8088')});