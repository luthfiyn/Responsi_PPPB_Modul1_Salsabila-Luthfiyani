const express = require('express');
const router = express.Router();
const controller = require('../controllers/shoewashController');

router.get('/', controller.listItems);
router.get('/:id', controller.getItem);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
