const popup = document.querySelector('.popup');
const openButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = popup.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popupInputName = popup.querySelector('.popup__input_name');
let popupInputProfession = popup.querySelector('.popup__input_profession');
let popupSave = popup.querySelector('.popup__button-save');

function togglePopup() {
  popup.classList.toggle('popup__edit');
};
popup.addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});
function popupBottonSave(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  togglePopup();
};
openButtonEdit.addEventListener('click', togglePopup);
popupButtonClose.addEventListener('click', togglePopup);
popupSave.addEventListener('click', popupBottonSave);

