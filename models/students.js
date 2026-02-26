const mongoose=require("mongoose");
const validator=require('validator');

const studentSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        minlength:3,

    },
    
        email:{
            type:String,
            required:true,
            minlength:3,
            unique:[true,"Eamil id already present"],
            validate(value){
                if (!validator.isEmail(value)) {
                    throw new Error("invalid Email");
                    
                }
            }
        },
        phone:{
            type:String,
            
            required:true,
            unique:true,
            //  validate(value){
            //     if (!validator.isMobilePhone(value)) {
            //         throw new Error("invalid number");
                    
            //     }
            // }
        },
        address:{
            type:String,
            required:true,
        }
    
})
const Student=new mongoose.model("student",studentSchema);// create a collection
module.exports=Student;