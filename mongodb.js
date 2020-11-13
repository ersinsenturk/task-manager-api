
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionUrl,{useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect db")
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Renew inspection'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('tasks').updateMany({
    //         complete: false
    //     }, {
    //         $set: {
    //             complete: true   
    //         }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID('5fa5a76c0c27005bc4dfbec9') }, (error, task) => {
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({complete: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({complete: false}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     name: 'ers',
    //     age: 33
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'asd',
    //         age: 41
    //     },
    //     {
    //         name: 'zxc',
    //         age: 66
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         complete: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         complete: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         complete: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

    

})