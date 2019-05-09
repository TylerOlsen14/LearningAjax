const Request = require('request')
let myRequest = new Request("./address.json");

fetch(myRequest)
  .then(function(respo) {
    return respo.json();
  })
  .then(function(data) {
    console.log(data.url)
  })