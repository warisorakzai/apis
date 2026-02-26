const express =require("express");
const router=new express.Router();
const student=require("../models/students");

// app.get("/",(req,res)=>{
// res.send('how are you')
// })
router.post("/students", async (req, res) => {
  try {
    const newStudent = new student(req.body);
    const savedStudent = await newStudent.save();


    res.status(201).send(savedStudent);

  } catch (e) {
res.status(400).send(e);      }
});

router.get("/students",async(req,res)=>{
try {
    const getStudent=await student.find();
    res.send(getStudent)
} catch (error) {
   res.status(500).json({ error: error.message });
}
})
router.get("/students/:id",async(req,res)=>{
try {

    const _id=req.params.id;
    console.log(_id)

 const studentId= await  student.findById(_id); 
 console.log(studentId);
 if (!studentId) {
    return res.status(400).send();
 }else{
 res.send(studentId);

 }
} catch (error) {
  res.status(500).send(error.message);
}
})

router.delete("/students/:id",async(req,res)=>{
try {
      const _id=req.params.id;
    const deleteStudent=await student.findByIdAndDelete(_id);
    if (! _id) {
        return res.status(400).send();
    }else{
        res.send(deleteStudent);
    }
} catch (error) {
      res.status(500).send(error.message);
}
    
})
router.patch("/students/:id",async(req,res)=>{

   try {
     const _id=req.params.id;
    const updateStudent=await student.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    res.send(updateStudent);
   } catch (error) {
     res.status(500).send(error.message);
   }
})



module.exports=router;