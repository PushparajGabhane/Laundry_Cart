const mongoose=require("mongoose")

const express=require("express")

const app=express()

const register=require("./router/register")

app.use(register)

const main= async ()=>{

    await mongoose.connect('mongodb+srv://saikiran546:saikiran546@cluster0.bgdbs80.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'))

}

mongoose.set('strictQuery', false)
main()
app.listen(3001,()=>{
    console.log("port is listening")
})



