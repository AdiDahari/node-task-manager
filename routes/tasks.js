const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// General CRUD
router.route("/").get(getAllTasks).post(createTask);

// Specific CRUD
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
