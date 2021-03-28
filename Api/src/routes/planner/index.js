const express = require('express');
const PlannerController = require('../../controllers/plannerController');

const router = express.Router({ mergeParams: true });
const plannerController = new PlannerController();
router.post('/', plannerController.saveAnswer);
router.get('/:step', plannerController.getQuestion);

module.exports = router;