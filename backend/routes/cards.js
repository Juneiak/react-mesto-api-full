const router = require('express').Router();
const { celebrate } = require('celebrate');
const { createCardJoi, cardIdJoi } = require('../utils/joiValidatorTemplates');

const {
  getCards,
  createCard,
  deleteCard,
  setLike,
  removeLike,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate(createCardJoi), createCard);
router.delete('/:cardId', celebrate(cardIdJoi), deleteCard);
router.put('/:cardId/likes', celebrate(cardIdJoi), setLike);
router.delete('/:cardId/likes', celebrate(cardIdJoi), removeLike);

module.exports = router;
