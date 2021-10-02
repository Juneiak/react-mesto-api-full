import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteConfirmPopup(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true)
    props.onCardDelete(props.cardToDelete)
      .then(() => setIsLoading(false))
  }

  return (
    <PopupWithForm isLoading={isLoading} loading='Удаление...' onSubmit={handleSubmit} isOpen={props.cardToDelete} onClose={props.onClose} name="deleteConfirm" title="Вы уверены?" buttonPlaceholder="Да" />
  )
}

export default DeleteConfirmPopup