const mongoose = require("mongoose")

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database is connected ...");
    }).catch((err)=>{
        console.log("Database is not properly connected..");
        
    })
    } catch (error) {
        error.log(error.message)
    }
}

module.exports = connectDB();