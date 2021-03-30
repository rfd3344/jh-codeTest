const path = require('path');
const express = require('express');

const DIST_DIR = path.join(__dirname, '../public');
const app = express();

// Serving the files on the dist folder
app.use(express.static(DIST_DIR));

// Send index.html when the user access the web
app.get('*', function (req, res) {
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(8888, function () {
	console.log('Server is listening http://localhost:8888'); // eslint-disable-line
});
