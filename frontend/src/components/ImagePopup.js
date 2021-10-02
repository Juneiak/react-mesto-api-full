import React from "react"
function ImagePopup(props) {

  function overlayClose(evt) {
    if (evt.target.classList.contains('pop-up_opened')) {
      props.onClose()
    }
  }

  React.useEffect(() => {

    function closePopupByESC(evt) {
      if (evt.key === 'Escape') {
        props.onClose()
      }
    }
    
    if (props.card) {
      document.addEventListener('keydown', closePopupByESC)
    }
    
    return () => {
      document.removeEventListener('keydown', closePopupByESC)
    }

    
  }, [props.card])

  return (
    <div className={`pop-up ${props.card && "pop-up_opened"}`} id="photo" onClick={overlayClose}>
      <figure className="pop-up__figure">
        <button className="pop-up__close-button button-animation" onClick={props.onClose} type="button" id="photo-close"></button>
        <img className="pop-up__image" src={props.card && props.card.link} alt={`фотография ${props.card && props.card.name}`} />
        <figcaption className="pop-up__caption">{props.card && props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;