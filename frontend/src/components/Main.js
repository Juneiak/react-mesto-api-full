import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button"><img className="profile__avatar" src={currentUser.avatar} alt="аватар" /></button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button className="profile__edit-button button-animation" onClick={props.onEditProfile} type="button"></button>
        </div>
        <button className="profile__add-button button-animation" onClick={props.onAddPlace} type="button"></button>
      </section>
    
      <section className="elements">
        <ul className="elements__table">
        {props.cards.map((card) => (
          <Card key={card._id} onCardDeleteClick={props.onCardDeleteClick}  onCardLike={props.onCardLike} card={card} onCardClick={props.onCardClick}/>
        ))}
        </ul>
      </section>
  </main>
  );
}

export default Main;