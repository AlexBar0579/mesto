const popup = document.querySelector('.popup');
const openButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = popup.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popupInputName = popup.querySelector('.popup__input_type_name');
let popupInputProfession = popup.querySelector('.popup__input_type_profession');
let popupForm = document.querySelector('.popup__content');

function openPopup() {
  popup.classList.add('popup_edit');
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_edit');
}

function savePopupForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
};

openButtonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', savePopupForm);
