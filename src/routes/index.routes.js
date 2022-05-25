const { Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send("Hello world")
})

router.get('/api', (req, res)=>{
    res.send("api")
})

router.get('/api/auth', (req, res)=>{
    res.send("crear auth")
})

router.get('/api/login', (req, res)=>{
    res.send("crear login")
})

module.exports = router;