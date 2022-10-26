/**
 * Treehouse Project 5
 * Public-API-Request
 */

//Global scope variables
let _employees = [];
const _randomUser =`https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US` ;
const _gallery = document.querySelector('#gallery');
let card = document.querySelector('.card');
const modalClose = document.querySelector('.modal-close-btn')

/**
 * @param {employeeData} employeeData  displays employee data
 */
const displayEmployees = (employeeData) => {

    let _html = '';

    // loop through each employee and create HTML markup
    employeeData.forEach((employee, index) => {
    _employees.push(employee);
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;
    // template literals
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
// fetches data from API
fetch(_randomUser)
.then(res => res.json())
.then(res => res.results)
.then(displayEmployees)
.catch(err => console.log(err))

//console.log(_employees);
/**
 * 
 * @param {index} index 
 */

function displayModal(index) {
    // use object destructuring make our template literal cleaner
    let { name, dob, phone, email, location: { city, street, state, postcode
    }, picture } = _employees[index];
    let date = new Date(dob.date);

    const modalHTML = `
    <img class="modal-img" src="${picture.large}" />
    <div class="modal-info-container">
    <h2 class="modal-text">${name.first} ${name.last}</h2>
    <p class="modal-text">${email}</p>
    <p class="modal-text">${city}</p>
    <hr />
    <p>${phone}</p>
    <p class="modal-text">${street}, ${state} ${postcode}</p>
    <p>Birthday:
    ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    `;
    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
    }
/**
 * 
 */
    _gallery.addEventListener('click', e => {
      // click is not on the modal-container
      if (e.target !== modal-container) {
      // select the card element based on its proximity to actual element
      clicked
      const card = e.target.closest(".card");
      const index = card.getAttribute('data-index');
      displayModal(index);
      }
      });
/**
  * 
*/
    modalClose.addEventListener('click', () => {
      // overlay.classList.add("hidden");
    });



    // <div class="modal-container">
    // <div class="modal">
    //     <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    //     <div class="modal-info-container">



    //         <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
    //         <h3 id="name" class="modal-name cap">name</h3>
    //         <p class="modal-text">email</p>
    //         <p class="modal-text cap">city</p>
    //         <hr>
    //         <p class="modal-text">(555) 555-5555</p>
    //         <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
    //         <p class="modal-text">Birthday: 10/21/2015</p>
    //     </div>
    // </div>
