const items = document.getElementsByTagName('li')
for (let idx = 0; idx < items.length; idx++) {
  items[idx].insertAdjacentHTML(
    'afterbegin',
    `<label style="background:#ff0;padding:2px;cursor:pointer;"> checkit! <input type="checkbox"></label>&nbsp;`
  )
}
