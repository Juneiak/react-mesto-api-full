import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef()

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value)
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} name="editAvatar" title="Обновить аватар" buttonPlaceholder="Сохранить" onClose={props.onClose} isOpen={props.isOpen}>
      <input ref={avatarRef} className="pop-up__form-text-input" type="url" id="changeAvatarUrl" name="newAvatarUrl" placeholder="Ссылка на аватар" required />
      <span className="pop-up__error changeAvatarUrl-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup