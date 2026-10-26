const userModel = require("../model/userModel");

const userPost = async (req,res) =>{
    try {
        const user = await userModel.create(req.body);
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
         res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

const userGet = async (req,res) => {
    try {
        const user = await userModel.find();
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const userDelete = async (req,res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        console.log(user);
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const userUpdate = async (req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument:"after"});
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


module.exports = {
    userPost,
    userGet,
    userDelete,
    userUpdate
}