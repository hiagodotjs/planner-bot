const express = require('express');
const plannerRoutes = require('./planner');

const router = express.Router({mergeParams: true});

router.use('/planner', plannerRoutes);

module.exports = router;