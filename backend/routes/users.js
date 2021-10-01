const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getUserJoi, updateProfileJoi, updateAvatarJoi } = require('../utils/joiValidatorTemplates');
const {
  getUsers,
  getUser,
  updateProfile,
  updateAvatar,
  getUserInfo,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getUserInfo);
router.get('/:userId', celebrate(getUserJoi), getUser);
router.patch('/me', celebrate(updateProfileJoi), updateProfile);
router.patch('/me/avatar', celebrate(updateAvatarJoi), updateAvatar);

module.exports = router;
