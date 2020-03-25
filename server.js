/**
 * Created by AneeqShah on 2/27/19.
 */

const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
   res.sendfile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log("Server started on port: ", port);
});