const express = require("express");

const CategoryService = require("../services/categories.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
  deleteCategorySchema,
} = require("../schemas/category.schema");

const router = express.Router();
const service = new CategoryService();

router.get("/", async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  validatorHandler(getCategorySchema);
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    return res.json(category);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  validatorHandler(createCategorySchema);
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  validatorHandler(updateCategorySchema);
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  validatorHandler(deleteCategorySchema);
  try {
    const { id } = req.params;
    const deletedCategory = await service.delete(id);
    res.json(deletedCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
