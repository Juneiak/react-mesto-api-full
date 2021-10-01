import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const [name, changeName] = React.useState('')
  const [description, changeDescription] = React.useState('')

  React.useEffect(() => {
    changeName(currentUser.name);
    changeDescription(currentUser.about)
  }, [currentUser, props.isOpen])

  

  function handleNameChange(evt) {
    changeName(evt.target.value)
  }

  function handleDescriptionChange(evt) {
    changeDescription(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    })
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} name="profileEdit" title="Редактировать профиль" buttonPlaceholder="Сохранить" onClose={props.onClose} isOpen={props.isOpen}>
      <input className="pop-up__form-text-input" type="text" minLength="2" onChange={handleNameChange} maxLength="40" id="name" name="name" value={name} required placeholder="Имя" />
      <span className="pop-up__error name-error"></span>
      <input className="pop-up__form-text-input" type="text" minLength="2" onChange={handleDescriptionChange} maxLength="200" id="about" name="about" value={description} required placeholder="О себе" />
      <span className="pop-up__error about-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup