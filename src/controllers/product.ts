import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductsService.getAll(req.query);
      return products;
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductsService.create();
      return product;
    } catch (error) {
      next(error);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductsService.update(req.params.id, req.body);
      return product;
    } catch (error) {
      next(error);
    }
  }
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductsService.delete(req.params.id);
      return products;
    } catch (error) {
      next(error);
    }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const productById = await ProductsService.getById(req.params.id);
      return productById;
    } catch (error) {
      next(error);
    }
  }
}
export default ProductsController;
