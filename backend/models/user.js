const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../utils/customErrors/UnauthorizedError');

function emailValidation(email) {
  return validator.isEmail(email);
}

function avatarUrlValidation(url) {
  const urlRegEx = /https*:\/\/[w{3}]*\.*[\w\-./_~:?#[\]@!$&'()*+,;=]*\.\w{2,3}[\w/]*#?/;
  return urlRegEx.test(url);
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlegth: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: [avatarUrlValidation, 'неверный формат url'],
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [emailValidation, 'неверный формат почты'],
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .orFail(new UnauthorizedError('Некорректные данные аккаунта'))
    .then((user) => (bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) throw new UnauthorizedError('Некорректные данные аккаунта');
        return user;
      })
    ));
};

module.exports = mongoose.model('user', userSchema);
