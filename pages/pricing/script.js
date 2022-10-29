let dropdowns = document.querySelectorAll('.session-count-dropdown');

for (let dropdown of dropdowns) {
  dropdown.addEventListener('click', e => {
    e.preventDefault();
    
  });
}