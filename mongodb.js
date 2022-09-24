// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, 
    {useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false
}, (error, client) => {
    console.log("connected")
    
    if(error){
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)


})

