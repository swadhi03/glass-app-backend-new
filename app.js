const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { glassmodel } = require("./model/glass")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/glassdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let glass = new glassmodel(input)
    glass.save()
    console.log(glass)
    res.json({ "status": "success" })
})

app.post("/view", (req, res) => {
    glassmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})

app.post("/search",(req,res)=>{
    let input = req.body
    glassmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    glassmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})


app.listen(8082, () => {
    console.log("server started")
}
)
