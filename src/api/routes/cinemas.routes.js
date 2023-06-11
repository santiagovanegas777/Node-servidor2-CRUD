const express = require('express');
const router = express.Router();

const { getCinema, newCinema, updateCinema, deleteCinema} = require('../controllers/cinemas.controller');


router.get('/',getCinema);
router.post('/',newCinema);
router.put('/:id',updateCinema);
router.delete("/:id", deleteCinema);
module.exports = router;