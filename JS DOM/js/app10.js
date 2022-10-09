'use strict'

let allNotes = document.body.querySelectorAll(".pane");
for (let i = 0; i < allNotes.length; i++) {
  allNotes[i].insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');

  allNotes[i].firstChild.onclick = () => allNotes[i].remove();

}


