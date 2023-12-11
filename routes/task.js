const express = require('express');
const router = express.Router();
const {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks} = require('../controllers/task');

router.route('/').get(getAllTasks).post(createTasks);

// id params for specfic items to get,update and delete 
// PUT/PATCH for updating the items
router.route('/:name').get(getTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router;

