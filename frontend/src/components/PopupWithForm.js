import React from "react"
function PopupWithForm({onClose, isOpen, name, onSubmit, children, title, isLoading, loading, buttonPlaceholder}) {

  function overlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  React.useEffect(() => {

    function closePopupByESC(evt) {
      if (evt.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closePopupByESC)
    }
    
    return () => {
      document.removeEventListener('keydown', closePopupByESC)
    } 

    
  }, [isOpen])
  
  return (
    <div className={`pop-up ${isOpen && "pop-up_opened"}`} id={name} onClick={overlayClose}>
    <form onSubmit={onSubmit} className="pop-up__form" method="POST" noValidate name={name} id={`${name}-form`}>
      <fieldset className="pop-up__form-container">
        <h2 className="pop-up__title">{title}</h2>
        {children}
        <button className="pop-up__form-button button-animation button-animation_blackout-level_light" type="submit">{isLoading ? loading : buttonPlaceholder}</button>
      </fieldset>
      <button className="pop-up__close-button button-animation" type="button" onClick={onClose}></button>
    </form>
  </div>
  )
}

export default PopupWithForm;
