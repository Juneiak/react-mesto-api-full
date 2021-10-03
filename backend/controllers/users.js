const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../utils/customErrors/NotFoundError');
const ConflictError = require('../utils/customErrors/ConflictError');
const BadRequestError = require('../utils/customErrors/BadRequestError');

const getUserInfo = (req, res, next) => {
  const { _id } = req.user;
  User.findById(_id)
    .orFail(new NotFoundError('Пользователь по указанному _id не найден.'))
    .then((userData) => res.send({
      user: {
        name: userData.name,
        about: userData.about,
        avatar: userData.avatar,
        _id: userData._id,
        email: userData.email,
      },
    }))
    .catch((err) => {
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail(new NotFoundError('Пользователь по указанному _id не найден.'))
    .then((userData) => res.send({
      user: {
        name: userData.name,
        about: userData.about,
        avatar: userData.avatar,
        _id: userData._id,
        email: userData.email,
      },
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Ошибка валидации вводимых данных');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name = 'empty',
    about = 'empty',
    avatar = 'https://images.unsplash.com/photo-1633102006375-fb2b8ea1082b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1854&q=80',
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((createdData) => res.send({
      data: {
        name: createdData.name,
        about: createdData.about,
        avatar: createdData.avatar,
        email: createdData.email,
      },
    }))
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) throw new ConflictError('Данный email уже зарегистрирован');
      if (err.name === 'ValidationError') throw new BadRequestError('Ошибка валидации вводимых данных');
      next(err);
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((usersData) => res.send({ users: usersData }))
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { _id } = req.user;
  const { name, about } = req.body;
  User.findByIdAndUpdate(_id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .orFail(new NotFoundError('Пользователь по указанному _id не найден.'))
    .then((updatedData) => res.send({ updatedProfileData: updatedData }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Переданы некорректные данные при обновлении профиля.');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const { _id } = req.user;
  const { avatar } = req.body;
  User.findByIdAndUpdate(_id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .orFail(new NotFoundError('Пользователь по указанному _id не найден.'))
    .then((updatedData) => res.send({ data: updatedData }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Переданы некорректные данные при обновлении аватара.');
      if (err.name === 'CastError') throw new BadRequestError('Ошибка валидации id');
      next(err);
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      // res.cookie('jwtToken', token, {
      //   maxAge: 3600000 * 24 * 7,
      //   httpOnly: true,
      //   sameSite: true,
      // });
      res.send({ token });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestError('Ошибка валидации вводимых данных.');
      next(err);
    })
    .catch(next);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateAvatar,
  updateProfile,
  login,
  getUserInfo,
};
