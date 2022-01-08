import express from "express";
import { createUser, getUser, readUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users, ou seja, colocando o '/' na verdade está /users/
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', readUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;