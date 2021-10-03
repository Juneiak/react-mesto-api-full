const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/customErrors/UnauthorizedError');

const auth = (req, res, next) => {
  const jwtToken = req.cookies['jwtToken'];
  if (!jwtToken) next(new UnauthorizedError('требуется авторизация'));

  let payload;
  try {
    payload = jwt.verify(jwtToken, 'some-secret-key');
  } catch (err) {
    next(new UnauthorizedError('требуется авторизация'));
  }
  req.user = payload;
  next();
  return payload;
};

module.exports = auth;
