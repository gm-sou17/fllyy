gitconst express = require('express')
const noteModel = require("./models/nots.model")
const app = express()


app.use(express.json()) 

// 4 API  
//post/notes=> create a note

app.post("/notes", async(req,res)=>{

    try{
    const data = req.body // title and decripation
    await noteModel.create({

        title:data.title,
        description:data.description
        
    })
    res.status(200).json({
        message: "note created "
    })
    } catch(error){
        res.status(500).json({
            error:error.message
        })
        
})
  app.get("/notes", async(req,res)=>{

      try{
      const notes = await noteModel.find()//  hmesa arry return krega
      
       res.status(200).json({
        message: "note  fetched sucessfully " ,
        notes:notes 
    })
      }catch(error){
          res.status(500).json({
              erorr:erorr.message
          })

});

app.delete('/arr/:id',  async(req,res)=>{

    try{

    const id = req.params.id ;

    await modelname.findByIdAndDelete(id)

    res.status(200).json({
        message:" data delete sucessfully ",
         
    })
}  catch(error){
    res.status(500).json({
        error:error.message 
    })
}
})

app.patch('/arr/:id', async (req, res) => {
  try {
    const id = req.params.id;

    await modelname.findByIdAndUpdate(id, {
      tital: req.body.tital,
      description: req.body.description
    });

    res.status(200).json({
      message: "data updated successfully"
    });

  } catch (error) {
    res.status(500).json({
        error: error.message });
  }
});


module.exports = app ;
