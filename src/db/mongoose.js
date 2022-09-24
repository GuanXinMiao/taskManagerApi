
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log("Error while connecting to Mongodb: ", error)
})



// const me = new User({
//     name: "Guan  ",
//     email:"guanxin@gmail.com",
//     password: "passwor1"
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) => {
//     console.log("Error! ",error)
// })

// const Tasks = mongoose.model("Tasks", {
//     description: {
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed: {
//         type:Boolean,
//         default:false
//     }
// })

// const newTask = new Tasks({
//     description: "Eat  lunch             ",
//     //completed: false
// })

// newTask.save().then((result) =>{
//     console.log(result)
// }).catch((error)=>{
//     console.log("Error for update task!",error)
// })