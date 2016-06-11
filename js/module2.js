console.log("this is module2");
var _ = require('lodash');

var people = [{
  "id": 1,
  "gender": "Male",
  "first_name": "Patrick",
  "last_name": "Ferguson",
  "email": "pferguson0@myspace.com",
  "ip_address": "24.42.42.96"
}, {
  "id": 2,
  "gender": "Male",
  "first_name": "Robert",
  "last_name": "Gonzalez",
  "email": "rgonzalez1@arstechnica.com",
  "ip_address": "203.84.223.170"
}, {
  "id": 3,
  "gender": "Male",
  "first_name": "Daniel",
  "last_name": "Lopez",
  "email": "dlopez2@shutterfly.com",
  "ip_address": "167.64.55.84"
}, {
  "id": 4,
  "gender": "Female",
  "first_name": "Pamela",
  "last_name": "Adams",
  "email": "padams3@senate.gov",
  "ip_address": "167.7.104.189"
}, {
  "id": 5,
  "gender": "Male",
  "first_name": "Robert",
  "last_name": "Snyder",
  "email": "rsnyder4@mozilla.org",
  "ip_address": "206.60.16.167"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;
alert(femaleCount + " females");
