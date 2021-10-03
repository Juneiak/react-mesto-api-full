const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/customErrors/UnauthorizedError');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) next(new UnauthorizedError(`требуется авторизация ${authorization}`));
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    next(new UnauthorizedError('требуется авторизация'));
  }
  req.user = payload;
  next();
};

module.exports = auth;

// const auth = (req, res, next) => {
//   const { jwtToken } = req.cookies;
//   if (!jwtToken) next(new UnauthorizedError('требуется авторизация'));

//   let payload;
//   try {
//     payload = jwt.verify(jwtToken, 'some-secret-key');
//   } catch (err) {
//     next(new UnauthorizedError('требуется авторизация'));
//   }
//   req.user = payload;
//   next();
//   return payload;
// };