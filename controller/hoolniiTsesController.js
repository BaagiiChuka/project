const HoolniiTses = require('../model/hoolniiTsesModel');
const MyError = require("../utils/MyError");
const asyncHandler = require("../middleWares/asyncHandler");

exports.getHoolniiTsesnuud=asyncHandler (async(req, res, next)=>{
        const hool = await HoolniiTses.find()
        res.status(200).json({
            success: true,
            data: hool,
        }
    )
})
exports.getHoolniiTses=asyncHandler (async(req,res,next)=>{
        const hool = await HoolniiTses.findById(req.params.id).populate("hoolniiOrts")
        if(!hool){
            throw new MyError(req.params.id + " ID тай хоол байхгүй", 400)
        }
        res.status(200).json({
            success: true,
            data:hool,
        })
    }
);
exports.createHoolniiTses=asyncHandler(async(req,res,next)=>{
    console.log(req.files);
    const hool = await HoolniiTses.create(req.body)
    res.status(200).json({
        success: true,
        data: hool,
    })
});

exports.updateHoolniiTses=asyncHandler(async(req,res,next)=>{
        const hool = await HoolniiTses.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true
        })
        if(!hool){
            throw new MyError(req.params.id + " ID тай хоол байхгүй байна", 400)
        }
        res.status(200).json({
            success: true,
            data:hool
        })
});

exports.deleteHoolniiTses=asyncHandler(async(req,res,next)=>{
        const hool = await HoolniiTses.findById(req.params.id)
        if(!hool){
            throw new MyError(req.params.id + " ID тай хоол байхгүй байна", 400)
        }
        hool.delete
        res.status(200).json({
            success: true,
            data:hool
        })
})
