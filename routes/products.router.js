const express = require("express");
const ProductsService = require("../services/products.service")
const validatorHandler = require("../middlewares/validator.handler")
const { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema } = require("../schemas/product.schema")

const router = express.Router();
const service = new ProductsService();

router.get("/",
  async (req, res, next) => {
    try {
      const products = await service.find()
      res.json(products)
    } catch (error) {
      next(error)
    }
  })

router.get("/filter", async (req, res, next) => {
  try {
    res.send("yo soy un filtro")
  } catch (error) {
    next(error)
  }
})

router.get("/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  })

router.post("/",
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body)
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  })

router.patch("/:id",
  validatorHandler(updateProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      return res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  })

router.delete("/:id",
  validatorHandler(deleteProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.delete(id);
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
