import { Kafka } from "kafkajs";

export const kafka=new Kafka({
    clientId:"kafka learn",
    brokers:["172.50.12.73:9092"]
});