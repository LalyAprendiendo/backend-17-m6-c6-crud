import { where } from "sequelize";
import Product from "../models/product";
import { Op } from "sequelize";

class ProductsService {
  static async getAll(props: any) {
    try {
      const where: any = {
        // maxCost: { [Op.lt]: 120000 }
      };

      if (props.maxCost) {
        where.maxCost = { [Op.lt]: props.maxCost };
      }
      const products = await Product.findAll({ where: where });
      return products;
    } catch (error) {
      throw error;
    }
  }
  static async create() {
    try {
      const product = await Product.create();
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async update(id: string, data: object) {
    try {
      // const { name } = {name:"Laura"}
      //console.log(name) ==> "Laura"

      // const [number, number2, number3] = [200,5,44]
      //console.log(number) ==> 200
      //console.log(number2) ==> 5
      //console.log(number3) ==> 44

      const [product] = await Product.update(data, { where: { id } });
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id: string) {
    try {
      const products = await Product.destroy({ where: { id } });
      return products;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id: string) {
    try {
      const productById = await Product.findByPk(id);
      return productById;
    } catch (error) {
      throw error;
    }
  }
}
export default ProductsService;
