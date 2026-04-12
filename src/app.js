gitconst express = require('express')
const noteModel = require("./models/nots.model")
const app = express()


app.use(express.json()) 

// 4 API  
//post/notes=> create a note

app.post("/notes", async(req,res)=>{
    const data = req.body // title and decripation
    await noteModel.create({

        title:data.title,
        description:data.description
        
    })
    res.status(200).json({
        message: "note created "
    })
})
  app.get("/notes", async(req,res)=>{
      const notes = await noteModel.find()//  hmesa arry return krega
      
       res.status(200).json({
        message: "note  fetched sucessfully " ,
        notes:notes 
    })

});
//GET/notes => Get all note
//Delete/notes=>Delete a note
// patch/notes/:id => update a note


module.exports = app ;