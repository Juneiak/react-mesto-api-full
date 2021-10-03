import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import React from 'react';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteConfirmPopup from './DeleteConfirmPopup';

function Content() {

  const [isEditProfilePopupOpen, editProfileState] = React.useState(false);
  const [isAddPlacePopupOpen, addPlaceState] = React.useState(false);
  const [isEditAvatarPopupOpen, editAvatarState] = React.useState(false);
  const [cardToDelete, selectCardToDelete] = React.useState(null);
  const [selectedCard, selectedCardState] = React.useState(null);
  const [currentUser, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);


  function handleEditProfileClick() {
    editProfileState(true);
  }

  function handleAddPlaceClick() {
    addPlaceState(true);
  }

  function handleEditAvatarClick() {
    editAvatarState(true);
  }
  
  function handleCardClick(cardData) {
    selectedCardState(cardData);
  }

  function handleCardDeleteClick(cardData) {
    selectCardToDelete(cardData)
  }


  function closeAllPopups() {
    editProfileState(false);
    addPlaceState(false);
    editAvatarState(false);
    selectedCardState(null);
    selectCardToDelete(null);
  }



  function handleUpdateUser(newProfileData) {
    async function updateProfile() {
      try {
        const updatedProfileData = await api.editPrifile(newProfileData)
        setUserInfo(updatedProfileData);
        closeAllPopups()
      } catch(e) {
        console.error(e)
      }
    }
    updateProfile()
  }

  function handleUpdateAvatar(newAvatarUrl) {
    async function updateAvatar() {
      try {
        const updatedProfileData = await api.changeAvatar(newAvatarUrl)
        setUserInfo(updatedProfileData)
        closeAllPopups()
      } catch(e) {
        console.error(e)
      }
    }
    updateAvatar()
  }

  function handleAddCard(newCardData, clearPopup) {
    api.addCard(newCardData)
      .then(newCard => {
        setCards([newCard, ...cards])
        clearPopup()
        closeAllPopups()
      })
      .then(e => {
        console.error(e)
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(liked => liked._id === currentUser._id)
    async function toggleLike() {
      try {
        const updatedCard = await api.likeStatus(card._id, !isLiked)
        setCards(cards => cards.map(c => c._id === updatedCard._id ? updatedCard : c))
      } catch(e) {
        console.error(e)
      }
    }
    toggleLike()
  }

  function handleCardDelete(card) {

    return (api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c._id !== card._id))
        selectCardToDelete(null);
      })
      .catch(e => console.error(e)))
  }

  React.useEffect(() => {
    async function setData() {
      try {
        const userData = await api.getUserProfileData()
        setUserInfo(userData.data)
      } catch(e) {
        console.error(`error: ${e}`)
      }
    }
    setData()

    async function setInitialCards() {
      try {
        const initialCards = await api.getInitialCards();
        setCards(initialCards);
      } catch(e) {
        console.error(e);
      };
    }
    setInitialCards()
  }, [])


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Main onCardDeleteClick={handleCardDeleteClick} cards={cards} onCardLike={handleCardLike} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      
      
        <AddPlacePopup onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} onAddPlace={handleAddCard} />
        
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <DeleteConfirmPopup onCardDelete={handleCardDelete} cardToDelete={cardToDelete} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default Content;
