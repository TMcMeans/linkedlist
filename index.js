// ===================================================
// GLOBAL VARIABLES
// ===================================================

var webTitleInput = document.querySelector('#webTitle');
var webURLInput = document.querySelector('#webURL');
var submitButton = document.querySelector('#submitButton');
var bookmarkTitle = document.querySelector('h3');
var bookmarkURL = document.querySelector('a');
var rightColumn = document.querySelector('.right-container');
var leftColumn = document.querySelector('.left-container');
var linkCount = document.querySelector('.link-count');
var readCount = document.querySelector('.read-count');
var links = 0; 
var read = 0;

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
  countLinks();
});

rightColumn.addEventListener('click', function(event) {
  removeBookmark(event);
  if (event.target.classList.contains('read-btn')) { 
    readCount.innerHTML = rightColumn.querySelectorAll('.read').length;
  }
});

leftColumn.addEventListener('keyup', function(event) {
  disableInputs(event);
});

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
         <button class="table-btn read-btn" onclick="classList.toggle('read')">Read</button>
         <button class="table-btn delete-btn">Delete</button>
       </td>
     </tr>`;
  rightColumn.appendChild(bookmark);
  submitButton.setAttribute('disabled', 'disabled'); 
};

function clearInputs() {
  webTitleInput.value = '';
  webURLInput.value = '';
};

function removeBookmark(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    links--;
    linkCount.innerHTML = links;
  } 
};

function disableInputs(event) {
  if (event.target.tagName.toLowerCase('input')) {
    if (webTitleInput.value != '' && webURLInput.value != '') {
      submitButton.removeAttribute('disabled'); 
    }
  }
};

function countLinks() {
    links++;
    linkCount.innerHTML = links; 
};









