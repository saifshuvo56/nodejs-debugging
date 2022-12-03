var axios = require('axios');

var URL = "https://restcountries.com/v3.1/all"
axios.get(URL).then(function(response){
let countryList = response.data;
let statusCode = response.status;

console.log(countryList);
console.log(statusCode);

}).catch(function(error){
console.log(error);

})