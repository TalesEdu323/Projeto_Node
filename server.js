const cors = require('cors');
const express = require('express');
const app = express ();
const fetch = require('node-fetch');
const { response } = require('express');

app.use(express.static('public'));
app.use(express.json());

app.use(cors());


app.post('/search', async (request, response) => {
	try {
		const data = request.body;
		const response = await fetch (`https://api.github.com/users/${data.repository}/repos`);
		const jsonResponse = await response.json();
		
		return response.json({ "repositories": jsonResponse});
	} 
	catch (error) {
		return response.status(400).json({ "error": "Error consulting Github API" })
	}
});

app.listen(8088, () =>{ console.log('Server running on port 8088')});