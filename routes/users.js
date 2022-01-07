import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const users = [
    {
        firstName: "Adriano",
        lastName: "Neto",
        age: 22
    },
    {
        firstName: "Emilly",
        lastName: "Catariny",
        age: 22
    }
]

// all routes in here are starting with /users, ou seja, colocando o '/' na verdade está /users/
router.get('/', (req, res) => {
    
    res.send(users);
} );

router.post('/', (req, res) => {

    const user = req.body;

    users.push(user)

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;