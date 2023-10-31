import {kafka} from "./client.js"

async function init(){
    // making an admin to setup the infra
    const admin=kafka.admin()
    admin.connect()
    // creating topics in the kafka along with the partitions
    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
        topics:[{
            topic:"rider-updates",
            numPartitions:2
        },
    ],
    })


    console.log("Disconnecting Admin..");
    await admin.disconnect()
}

init()