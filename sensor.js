var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://broker.mqttdashboard.com',{
  protocolId: 'MQIsdp',
  protocolVersion: 3
});



client.on('connect', function () {
    console.log("connected");
})

const sub =  function () {
    client.on('message', function (topic, message) {
       console.log("Sedang Di proses, tunggu beberapa menit");
       var x = JSON.parse(message)
       console.log(x)

       client.end()
     })
 }

client.subscribe('mytopic/sensor', sub)