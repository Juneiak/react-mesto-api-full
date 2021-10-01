const { Joi } = require('celebrate');

const urlRegEx = /https*:\/\/[w{3}]*\.*[\w\-./_~:?#[\]@!$&'()*+,;=]*\.\w{2,3}[\w/]*#?/;

const getUserJoi = {
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
};

const updateProfileJoi = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
};

const createCardJoi = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(urlRegEx),
  }),
};
const cardIdJoi = {
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
};

const loginJoi = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

const createUserJoi = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(urlRegEx),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

const updateAvatarJoi = {
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(urlRegEx),
  }),
};

module.exports = {
  getUserJoi,
  updateProfileJoi,
  createCardJoi,
  cardIdJoi,
  loginJoi,
  createUserJoi,
  updateAvatarJoi,
};
