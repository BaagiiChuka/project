const HoolniiOrts = require('../model/hoolniiOrtsModel');
const MyError = require("../utils/MyError");
const asyncHandler = require("../middleWares/asyncHandler");

exports.getHoolniiOrtsnuud=asyncHandler (async(req, res, next)=>{
        const hool = await HoolniiOrts.find()
        res.status(200).json({
            success: true,
            data: hool,
        }
    )
})
exports.getHoolniiOrts=asyncHandler (async(req,res,next)=>{
        const hool = await HoolniiOrts.findById(req.params.id)
        if(!hool){
            throw new MyError(req.params.id + " Орцтой  хоол байхгүй", 400)
        }
        res.status(200).json({
            success: true,
            data:hool,
        })
    }
);
exports.createHoolniiOrts=asyncHandler(async(req,res,next)=>{
    console.log(req.files);
    const hool = await HoolniiOrts.create(req.body)
    res.status(200).json({
        success: true,
        data: hool,
    })
});

exports.updateHoolniiOrts=asyncHandler(async(req,res,next)=>{
        const hool = await HoolniiOrts.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true
        })
        if(!hool){
            throw new MyError(req.params.id + " Орцтой  хоол байхгүй байна", 400)
        }
        res.status(200).json({
            success: true,
            data:hool
        })
});

exports.deleteHoolniiOrts=asyncHandler(async(req,res,next)=>{
        const hool = await HoolniiOrts.findById(req.params.id)
        if(!hool){
            throw new MyError(req.params.id + " Орцтой  хоол байхгүй байна", 400)
        }
        hool.delete
        res.status(200).json({
            success: true,
            data:hool
        })
})
