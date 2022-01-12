const mqtt = require('mqtt');

const mqttclient  = mqtt.connect('mqtt://broker.mqttdashboard.com',{
  protocolId: 'MQIsdp',
  protocolVersion: 3
});

module.exports = mqttclient;