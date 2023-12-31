import express from 'express';
import UserController from '../controllers/userController';
const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

router.get


export default router;
