const config = require("../config");
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${config.YelpApiKey}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

/**
 *  Retrieve all garages (PLEASE DON'T DO THIS, EVERYTHING WILL DIE!!)
 * */
const getGarages = async (req, res) => {
  const response = await fetch(
    `${config.YelpBaseUrl}?term=parking garage`,
    requestOptions
  );
  const json = await response.json();
  res.json(json);
};

/**
 * Retrieve garages within given area specified by the user
 **/
const getGaragesByLocation = async (req, res) => {
  const location = req.params.location;
  const response = await fetch(
    `${config.YelpBaseUrl}?term=parking%20garage&location=${location}`,
    requestOptions
  );
  const json = await response.json();
  res.json(json);
};

module.exports = {
  getGarages,
  getGaragesByLocation,
};
