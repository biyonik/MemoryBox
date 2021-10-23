const router = require('express').Router();
const {
    getAll,
    getById,
    add,
    update,
    remove
} = require('../controllers/MemoryController');


router.get('/', getAll);

router.get('/:id', getById);

router.post('/', add);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
