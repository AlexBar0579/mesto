const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openButtonEdit = document.querySelector('.profile__button-edit');
const openButtonAdd = document.querySelector('.profile__button-add');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
const popups = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupFormEdit = document.querySelector('.popup__content_edit');
const closeButton = document.querySelectorAll('.popup__button-close');
let popupInputName = popupEdit.querySelector('.popup__input_type_name');
let popupInputProfession = popupEdit.querySelector('.popup__input_type_profession');
const popupAdd = document.querySelector('.popup_add');
const popupFormAdd = document.querySelector('.popup__content_add');
let popupInputMestoName = popupAdd.querySelector('.popup__input_mesto_name');
let popupInputMestoLink = popupAdd.querySelector('.popup__input_mesto_link');
const popupImg = document.querySelector('.popup-img');
const popupButtonCloseImg = document.querySelector('.popup-img__button-close');
let popupImgImage = popupImg.querySelector('.popup-img__image');
let popupImgTitle = popupImg.querySelector('.popup-img__title');
const templateElm = document.querySelector('.template-elm').content;
const elementCard = document.querySelector('.element');
const elementsCard = document.querySelector('.elements');

function openPopup(popups) {
  popups.classList.add('popup_opened');
}
function closePopup(popups) {
  popups.classList.remove('popup_opened');
}
function openPopupEdit () {
  openPopup(popupEdit);
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}
function savePopupForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupEdit);
};
function displayElement (card) {
  const elm = templateElm.querySelector('.element').cloneNode(true);
  elm.querySelector('.element__image').src = card.link;
  elm.querySelector('.element__mesto-name').textContent = card.name;
  elm.querySelector('.element__button-heart').addEventListener('click', bottonHeart);
  elm.querySelector('.element__button-trash').addEventListener('click', bottonTrash);
  /*elm.querySelector('.element__image').addEventListener('click', bigImg);*/
  return elm;
}
function addCard (card) {
  const cardElm = displayElement(card);
  elementsCard.prepend(cardElm);
}
function newCards (evt) {
  evt.preventDefault();
  const newCard = {name : popupInputMestoName.value,
                   link : popupInputMestoLink.value};
  addCard(newCard);
  popupInputMestoName.value = '';
  popupInputMestoLink.value = '';
  closePopup(popupAdd);
}
 function bottonTrash (event) {
   const trashElm = event.currentTarget.closest('.element');
   trashElm.remove();
 }
 function bottonHeart (event) {
  event.currentTarget.classList.toggle('element__button-heart_active');
}


openButtonEdit.addEventListener('click', () => {
  openPopupEdit();
});
openButtonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});
/*
closeButtonEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});*/

closeButton.forEach((item) => {
  item.addEventListener('click', (event) => {
  if (event.target.closest('.popup')) {
    closePopup(popups);
  }
  });
});

popupFormEdit.addEventListener('submit', savePopupForm);
popupFormAdd.addEventListener('submit', newCards);

initialCards.forEach(addCard);

