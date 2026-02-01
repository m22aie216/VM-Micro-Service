const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello  World!!!!' });
});

app.listen(301, () => console.log('  port 301 is used for  Virtual Machine1'));
