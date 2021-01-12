let tableWrapper = document.getElementById('tableWrapper');
let inputValue = '';

let table = document.createElement('table');

table.addEventListener('mousedown', function (e) {
  if (e.target.tagName === 'TABLE') {
    return;
  }

  const target = e.target.style;
  target.backgroundColor === 'black' ? target.backgroundColor = 'white' : target.backgroundColor = 'black';
})

function changeColorAll() {
  const tdTags = document.getElementsByTagName('td');
  const tdList = Array.prototype.slice.call(tdTags);

  tdList.forEach(e => {
    e.style.backgroundColor === 'black' ? e.style.backgroundColor = 'white' : e.style.backgroundColor = 'black';
  });
}

tableWrapper.appendChild(table);

function changeInputValue() {
  let input = document.getElementsByTagName('input')[0].value;
  if (+input === inputValue || +input > 15) return;
  inputValue = +input;

  table.innerText = '';

  for (let i = 0; i < inputValue; i++) {
    let row = document.createElement('tr')

    for (let j = 0; j < inputValue; j++) {
      let newCell = document.createElement('td')
      newCell.style.backgroundColor = 'white';

      row.appendChild(newCell)
    }

    table.appendChild(row);
  }
}
