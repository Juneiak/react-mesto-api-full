import React from "react";
import okImage from "../images/ok.svg";
import errorImage from "../images/error.svg";

function InfoTooltip(props) {

  function overlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      props.onClose()
    }
  }

  React.useEffect(() => {

    function closePopupByESC(evt) {
      if (evt.key === 'Escape') {
        props.onClose()
      }
    }
    if (props.isOpen) {
      document.addEventListener('keydown', closePopupByESC)
    }
    
    return () => {
      document.removeEventListener('keydown', closePopupByESC)
    } 

    
  }, [props.isOpen])

  return (
    <div className={`pop-up ${props.isOpen && "pop-up_opened"}`} onClick={overlayClose}>
      <div className='pop-up__info'>
        <img className='pop-up__info-icon' src={props.status ? okImage : errorImage} alt='icon' />
        <p className='pop-up__status'>{props.status ? props.okStatus : props.error ? props.error : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
        <button className="pop-up__close-button button-animation" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;