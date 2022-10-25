/**
 * Treehouse Project 5
 * Public-API-Request
 */

let _employees = [];
const _randomUser =`https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US` ;
const _gallery = document.querySelector('#gallery');

const displayEmployees = (employeeData) => {

    let _html = '';

    // loop through each employee and create HTML markup
    employeeData.forEach((employee, index) => {
    _employees.push(employee);
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;
    // template literals make this so much cleaner!
    _html += `
    <div class="card" data-index="${index}">
    <div class="card-img-container">
    <img class="card-img" src="${picture.large}" />
    </div>
    <div class="card-info-container">
    <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
    <p class="card-text">${email}</p>
    <p class="card-text cap">${city}</p>
    </div>
    </div>
  `
  });
    _gallery.innerHTML = _html;

    console.log(_employees);
} 

// fetch data from API
fetch(_randomUser)
.then(res => res.json())
.then(res => res.results)
.then(displayEmployees)
.catch(err => console.log(err))


//console.log(_employees);