import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({onClose, onAddPlace, isOpen}) {

  const [placeName, setPlaceName] = React.useState()
  const [placePhotoUrl, setPlacePhotoUrl] = React.useState()

  function handleSubmit(evt) {
    evt.preventDefault()
    onAddPlace({
      name: placeName,
      link: placePhotoUrl
    }, handlePopupClear)
  }

  function handleNameChange(evt) {
    setPlaceName(evt.target.value)
  }

  function handlePhotoUrlChange(evt) {
    setPlacePhotoUrl(evt.target.value)
  }

  function handlePopupClear() {
    setPlaceName('')
    setPlacePhotoUrl('')
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} name="addPhoto" title="Новое место" buttonPlaceholder="Создать" onClose={onClose} isOpen={isOpen}>
      <input onChange={handleNameChange} className="pop-up__form-text-input" type="text" minLength="2" maxLength="30" id="card-name" name="name" value={placeName} placeholder="Название" required />
      <span className="pop-up__error card-name-error"></span>
      <input onChange={handlePhotoUrlChange} className="pop-up__form-text-input" type="url" id="card-link" name="link" value={placePhotoUrl} placeholder="Ссылка на картинку" required />
      <span className="pop-up__error card-link-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup