const dialog = document.getElementById("dialog");
const dialog_content = document.getElementById("dialog-content");

function open_dialog() {
  dialog.classList.add("open-dialog");
}

function close_dialog() {
  dialog.classList.remove("open-dialog");
  setTimeout(() => {
    dialog_content.innerHTML = `<h1>Veux tu m'epouser ?</h1>
    <div class='buttons'>
      <button class='button primary' onclick='reponse_positive()'>Oui</button>
      <button class='button secondary' onclick='reponse_negative()'>Non</button>
    </div>`;
  }, 1000);
}

function reponse_positive() {
  dialog_content.innerHTML =
    "<center><h1 style='visibility:hidden;'>qsdqsf</h1> <h1>Merci, mon amour 😍</h1></center>";
}

function reponse_negative() {
  dialog_content.innerHTML =
    "<center><h1 style='visibility:hidden;'>qsdqsf</h1> <h1>Ahhh ça fait mal 😭</h1></center>";
}
