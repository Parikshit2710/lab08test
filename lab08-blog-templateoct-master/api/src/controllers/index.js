const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is an API. Please hit one of my endpoints, like `/posts`.');
});

module.exports = router;
