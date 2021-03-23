
const userAPI = () => {
  fetch(`${process.env.API_URL}/users`)
    .then(response => {
      console.log(response);

    })
}