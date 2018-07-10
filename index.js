// ===================================================
// GLOBAL VARIABLES
// ===================================================

var webTitleInput = document.querySelector('#webTitle');
var webURLInput = document.querySelector('#webURL');
var submitButton = document.querySelector('#submitButton');
var bookmarkTitle = document.querySelector('h3');
var bookmarkURL = document.querySelector('a');
var rightColumn = document.querySelector('.right-container');

// ===================================================
// EVENT LISTENERS
// ===================================================
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (webTitleInput.value === '' && webURLInput.value === '') {
    alert('you need to enter both values');
    return;
  } else if (webTitleInput.value === '') {
    alert('You need a Title');
    return;
  } else if (webURLInput.value === '') {
    alert('you need a URL');
    return;
  }
  addBookmark();
  clearInputs();
});

rightColumn.addEventListener('click', function(event) {
  removeBookmark(event);
})

// // on input listen for key up and change boolean value (clal .disabled)
// each input call check inputs function inside function use if else statement
// this.value=='' submitbutton.disabled =truel else other  in HTML, disabled=true.

// prepenned

// ===================================================
// FUNCTIONS
// ===================================================
function addBookmark() {
  var bookmark = document.createElement('table');
  bookmark.innerHTML = `
     <tr>
      <td>
         <h3>${webTitleInput.value}</h3>
       </td>
     </tr>
     <tr>
       <td class="tableURL">
           <a href="#">${webURLInput.value}</a>
       </td>
     </tr>
     <tr>
       <td class="table-btn-container">
         <button class="table-btn" onclick="classList.toggle('read')">Read</button>
         <button class="table-btn delete-btn">Delete</button>
       </td>
     </tr>`;
  rightColumn.appendChild(bookmark);
} 

function clearInputs() {
  webTitleInput.value = '';
  webURLInput.value = '';
}

function removeBookmark(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
};

// function checkInputs() {
// console.log('hi');
// };