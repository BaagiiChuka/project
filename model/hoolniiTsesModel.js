const mongoose = require('mongoose');

const HoolniiTsesSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
},
{
    toJSON:{virtuals:true}, toObject:{virtuals:true}
  }
  )
  HoolniiTsesSchema.virtual("hoolniiOrts",{
      ref:"HoolniiOrts",
      localField : "_id",
      foreignField:"hoolniiTses",
      justOne:false
    }
  )

module.exports = mongoose.model("HoolniiTses",HoolniiTsesSchema );
