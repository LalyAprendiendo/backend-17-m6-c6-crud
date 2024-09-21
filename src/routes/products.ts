import ProductsController from "../controllers/product";
import { Router } from "express";

const productsRouter = Router()

productsRouter.get("/", ProductsController.getAll)
productsRouter.get("/:id", ProductsController.getById)
productsRouter.post("/", ProductsController.create)
productsRouter.patch("/:id", ProductsController.update)
productsRouter.delete("/:id", ProductsController.delete)


export default productsRouter