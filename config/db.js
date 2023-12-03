require("dotenv").config();

const mongoose =  require('mongoose');

const connectDb = async ()=>{

    const mongoString = process.env.DATABASE_URL
    try {
        await mongoose.connect(mongoString)
        console.log('MongoDb connection successfully')
    } catch(error){
        console.log('MongoDb connection fail')
        process.exit(1)
    }
}

module.exports = {connectDb};