const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users/";
const userID = 8;

//GET ALL
fetch(`${PLACEHOLDER_URL_API}`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// METHOD GET 1
// fetch(`${PLACEHOLDER_URL_API}${userID}`, {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.info(data));

//PUT
// fetch(`${PLACEHOLDER_URL_API}${userID}`, {
//   method: "PUT",
//   body: JSON.stringify({
//     name: "Clementina DuBuqueTEST",
//     username: "Moriah.StantonTEST",
//     email: "Rey.Padberg@karina.biz",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.info(data));

// METHOD DELETE

// fetch(`${PLACEHOLDER_URL_API}${userID}`, {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((data) => console.info("Suppression réussie", data))
//   .catch((error) => console.error("Erreur lors de la suppression", error));
