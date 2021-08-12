const { Router } = require("express");
const Course = require("../models/product");
const router = Router();

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

module.exports = router;
