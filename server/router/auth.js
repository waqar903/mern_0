const express = require('express');
const router = express.Router();

const User = require('../modal/userSchema');

router.get('/', (req, res) => {
    res.send('Hi ... !');
})

router.post('/register', (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        return res.status(422).json({error: 'fill all feilds'})
    }

    User.findOne({email:email})
    .then((userExist) => {
        if(userExist) {
            return res.status(422).json({error: "email already exist"})
        }

        const user = new User({name, email});
        user.save().then(() => {
            res.status(201).json({message: "success"})
        }).catch((err) => {
            res.status(500).json({err: "failed to register"})
        })
    })
})

module.exports = router;
