import CurrentUserContext from "../contexts/CurrentUserContext";
import React from "react";

function Card({onCardClick, card, onCardLike, onCardDeleteClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some(liked => liked._id === currentUser._id)
  
  function handleClick() {
    onCardClick(card)
  }
  
  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDeleteClick(card)
  }

  return (
    <li className="element">
      <button onClick={handleDeleteClick} className={`element__delete-button ${!isOwn && 'element__delete-button_hidden'} button-animation`} type="button" id="delete-card"></button>
      <img className="element__image" src={card.link} alt={`фотография ${card.name}`} onClick={handleClick} />
      <div className="element__about">
        <h2 className="element__place-name">{card.name}</h2>
        <div>
          <button onClick={handleLikeClick} className={`element__like-button ${isLiked && 'element__like-button_active'} button-animation button-animation_blackout-level_medium `}type="button"></button>
          <p className="element__like-amount">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;