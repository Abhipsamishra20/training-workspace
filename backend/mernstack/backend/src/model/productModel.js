import mongoose,{Schema} from "mongoose";
//step 1 create schema and map schema
const productModel = new Schema({
    productName :{type:String},
    price: {type:Number},
    starRating: {type:Number},
    productId:{type:Number},
    productCode:{type:String},
    productAvailable:{type:Date},
    imageUrl:{type:Number}
},
{
    timestamps:true
})

//this is where we are mapping //this is also called decorating //we are aliasing here
export default mongoose.model('Product',productModel)