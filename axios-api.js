const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users/";
const userID = 7;
const axios = require("axios");

//GET ALL
axios
  .get(`${PLACEHOLDER_URL_API}`)
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

//  GET ONE
axios
  .get(`${PLACEHOLDER_URL_API}${userID}`)
  .then((res) => console.info(res.data))
  .catch((err) => console.error(err));

//PUT
axios
  .put(`${PLACEHOLDER_URL_API}${userID}`, {
    name: "Clementina DuBuqueTEST",
    username: "Moriah.StantonTEST",
    email: "Rey.Padberg@karina.biz",
  })
  .then((res) => console.info(res.data))
  .catch((err) => console.error(err));

//POST
axios
  .post(`${PLACEHOLDER_URL_API}`, {
    name: "Clementina DuBuqueTEST",
    username: "Moriah.StantonTEST",
    email: "Rey.Padberg@karina.biz",
  })
  .then((res) => console.info(res.data))
  .catch((err) => console.error(err));

//DELETE
axios
  .delete(`${PLACEHOLDER_URL_API}${userID}`)
  .then((res) => console.info("Deleted", res.data))
  .catch((err) => console.error("Erreur :", err));
