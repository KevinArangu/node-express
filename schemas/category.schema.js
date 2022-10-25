const joi = require("joi");

const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(15);
const image = joi.string().uri();

const getCategorySchema = joi.object({
  id: id.required(),
});

const createCategorySchema = joi.object({
  name: name.required(),
  image: image.required(),
});

const updateCategorySchema = joi.object({
  name: name,
  image: image,
});

const deleteCategorySchema = joi.object({
  id: id.required(),
});

module.exports = {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
};
