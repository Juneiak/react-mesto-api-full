const Card = require('../models/card');
const ForbiddenError = require('../utils/customErrors/ForbiddenError');
const NotFoundError = require('../utils/customErrors/NotFoundError');
const BadRequestError = require('../utils/customErrors/BadRequestError');

const getCards = (req, res, next) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((dataOfCards) => res.send({ data: dataOfCards }))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  Card.create({ name, link, owner: _id })
    .then((createdCardData) => res.send({ data: createdCardData }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Ошибка валидации вводимых данных');
      next(err);
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const { _id: currentUserId } = req.user;
  Card.findById(cardId)
    .orFail(new NotFoundError('Карточка по указанному _id не найден.'))
    .then((card) => {
      if (card.owner.toString() === currentUserId) {
        Card.findByIdAndRemove(cardId)
          .then((deletedCard) => res.send({ data: deletedCard }));
      } else throw new ForbiddenError('У вас нету прав на удаление этой карточки');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Ошибка валидации вводимых данных');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const setLike = (req, res, next) => {
  const { _id } = req.user;
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: _id } },
    { new: true },
  )
    .orFail(new NotFoundError('Карточка по указанному _id не найден.'))
    .then((updatedData) => res.send({ data: updatedData }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Переданы некорректные данные для постановки/снятии лайка.');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const removeLike = (req, res, next) => {
  const { _id } = req.user;
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: _id } },
    { new: true },
  )
    .orFail(new NotFoundError('Карточка по указанному _id не найден.'))
    .then((updatedData) => res.send({ data: updatedData }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Переданы некорректные данные для постановки/снятии лайка.');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  setLike,
  removeLike,
};
