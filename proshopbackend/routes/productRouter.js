import express from "express";
import AsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();


//@des : fetch all data
//@route : /api/product
//@acess : fetch all product 
router.get(
    '/',
     AsyncHandler( async(req, res) => {
    const products = await Product.find({});
         
    //now we send our res to site in json form
    res.json(products);
}))

router.get('/:id', AsyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id);
    
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router