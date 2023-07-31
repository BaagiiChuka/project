const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },

},{
    toJSON:{virtuals:true}, toObject:{virtuals:true}
  }
  )
  CategorySchema.virtual("hoolniiTses",{
      ref:"HoolniiTses",
      localField : "_id",
      foreignField:"category",
      justOne:false
    }
  )


module.exports = mongoose.model("Category",CategorySchema);
