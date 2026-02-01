const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
	const response = await axios.get('http://192.168.1.3:301/api/hello');
	res.send(response.data);
});

app.listen(401, () => console.log('Client   port used is  401 for  Virtual Machine 2'));

