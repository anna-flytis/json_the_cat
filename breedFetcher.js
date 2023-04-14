const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(page, (error, response, body) => {
    const parsed = JSON.parse(body);

    if (error) {
      callback(error, null);
    }

    if (parsed[0]) {
      callback(null, parsed[0].description);
    } else {
      callback("Couldn't find breed", null);
    }
  });
};

console.log(typeof body);
module.exports = fetchBreedDescription;