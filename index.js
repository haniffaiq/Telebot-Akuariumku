const mqttclient = require('./mqttconf');
const TelegramBot = require('node-telegram-bot-api');
const token = '5086537362:AAGyWDXFhMkXycrTNB87bgyu_miedZA8drg';
const bot = new TelegramBot(token, {polling: true});

mqttclient.subscribe('mytopic/sensor');
let dataSensor = []

const sensorDevice = (message) =>{
    console.log("=================SENSOR==============");
    dataPesan = JSON.parse(message)
    console.log(dataPesan);
    dataSensor = dataPesan
    // let date = dataPesan.info.date
    // let time = dataPesan.info.time
    // getDataTime(date, time)
    // let idx_kebun
    // let idx_zona
    // let datakebun

    
    // //let idx_zona = datakebun.findIndex(element=> element.zona.no === dataPesan.info.zona)

    // if(arr_sensor.find(element => element.kode_kebun == dataPesan.info.kode_kebun)){
    //     idx_kebun =  arr_sensor.findIndex(element=> element.kode_kebun == dataPesan.info.kode_kebun);
    //     datakebun = arr_sensor[idx_kebun].zona
    //     idx_zona = datakebun.findIndex(element=> element.no == dataPesan.info.zona);
    //     console.log(idx_kebun);
    //     console.log(datakebun);
    //     console.log(idx_zona);
    //     if(idx_zona != -1){
    //         console.log("Zona Sama Data Baru" + dataPesan.info.kode_kebun);
    //         arr_sensor[idx_kebun].zona[idx_zona] = {
    //             no : dataPesan.info.zona,
    //             date : tanggal,
    //             time : waktu,
    //             temp : dataPesan.sensor.temp,
    //             hum : dataPesan.sensor.hum,
    //             pressure : dataPesan.sensor.pressure,
    //             soilt : dataPesan.sensor.soilt,
    //             mois : dataPesan.sensor.mois,
    //             light : dataPesan.sensor.light,
    //             nutr : dataPesan.sensor.nutr,
    //         }
    //     }
        
    //     else{
    //         console.log("Zona Baru "+ dataPesan.info.kode_kebun);
    //         arr_sensor[idx_kebun].zona = [
    //         ...arr_sensor[idx_kebun].zona,
    //         {
    //             no : dataPesan.info.zona,
    //             date : tanggal,
    //             time : waktu,
    //             temp : dataPesan.sensor.temp,
    //             hum : dataPesan.sensor.hum,
    //             pressure : dataPesan.sensor.pressure,
    //             soilt : dataPesan.sensor.soilt,
    //             mois : dataPesan.sensor.mois,
    //             light : dataPesan.sensor.light,
    //             nutr : dataPesan.sensor.nutr,
    //         }
    //       ]
    //     }

    // }


    // else{
    //     arr_sensor.push({         
    //         kode_kebun : dataPesan.info.kode_kebun,
    //         zona : [{ 
    //                     no : dataPesan.info.zona,
    //                     date : tanggal,
    //                     time : waktu,
    //                     temp : dataPesan.sensor.temp,
    //                     hum : dataPesan.sensor.hum,
    //                     pressure : dataPesan.sensor.pressure,
    //                     soilt : dataPesan.sensor.soilt,
    //                     mois : dataPesan.sensor.mois,
    //                     light : dataPesan.sensor.light,
    //                     nutr : dataPesan.sensor.nutr,
                    
    //                 }]
            
            
               
    //     })
        
    //     kode_kebun_sensor.push(['SENSOR_'+dataPesan.info.kode_kebun])
        
    // }
    // console.log(kode_kebun_sensor);
    // console.log(arr_sensor);
    // console.log("=================SENSOR==============");
    try {

    
    } catch (error) {
        console.log('ERROR MQTT: ' + error);
}

}
    

mqttclient.on('message', function (topic, message) {
    sensorDevice(message)

    
});


// //BOT
bot.on('message', (msg) => {
    
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name
    const last_name = msg.chat.last_name
    console.log(first_name);
    const pesan = msg.text.toString()
    console.log(pesan);
    console.log(dataSensor);


    

    
    const suhu = "Cek Suhu"
    if (msg.text.toString().indexOf(suhu) === 0)  {
        let pesan = "Hallo " +first_name +" " + last_name + " Suhu pada akuarium adalah : " + dataSensor.suhu
        setTimeout(function(){
            bot.sendMessage(msg.chat.id, pesan) 
        }, 1000)
        
    }

    const amonia = "Cek Amonia"
    if (msg.text.toString().indexOf(amonia) === 0)  {
        let pesan = "Hallo " +first_name +" " + last_name + " Kadar Amonia pada akuarium adalah : " + dataSensor.amonia.toFixed(2) 
        setTimeout(function(){
            bot.sendMessage(msg.chat.id, pesan) 
        }, 1000)
        
    }

    const semua = "Cek Semua Sensor"
    if (msg.text.toString().indexOf(semua) === 0)  {
        let pesan =    "Hallo " +first_name +" " + last_name + "\n" +
                        "Suhu : " + dataSensor.suhu + "\n" +
                        "Amonia : " + dataSensor.amonia.toFixed(2)
        setTimeout(function(){
            bot.sendMessage(msg.chat.id, pesan) 
        }, 1000)
        
    }

    // if(msg.text.toString().indexOf(semua) !== 0 || msg.text.toString().indexOf(amonia) !== 0 || msg.text.toString().indexOf(suhu) !== 0){
    //     let pesan ="Apa itu "+ msg.text + " ?"
    //     setTimeout(function(){
    //         bot.sendMessage(msg.chat.id, pesan) 
    //     }, 1000)

    // }
    // const dose = "Dose"
    // if (msg.text.toString().indexOf(dose) === 0)  {
    //     bot.sendMessage(msg.chat.id, "Status Dose", {
    //         "reply_markup": {
    //             "keyboard": kode_kebun_dose
    //             }
    //         })
    // }
    // const station = "Station"
    // if (msg.text.toString().indexOf(station) === 0)  {
    //     bot.sendMessage(msg.chat.id, "Status Station", {
    //         "reply_markup": {
    //             "keyboard": kode_kebun_station
    //             }
    //         })
    // }
    // const sensor = "Sensor"
    // if (msg.text.toString().indexOf(sensor) === 0)  {
    //     bot.sendMessage(msg.chat.id, "Status Sensor", {
    //         "reply_markup": {
    //             "keyboard": kode_kebun_sensor
    //             }
    //         }) 
    // }
    
    // console.log(msg.text);
    // if (kode_kebun_main.find(element => element == msg.text))  {
    //     let index = arr_main.findIndex(element=> 'MAIN_'+element.kode_kebun === msg.text)
    //     let pesan = "Data Terakhir dari Kode Kebun " + arr_main[index].kode_kebun + " diupdate pada tanggal " + arr_main[index].time 
        
        
    //     console.log(pesan);
    //     bot.sendMessage(msg.chat.id, "Hallo kamu ingin mengecek kebun : " + msg.text)
    //     setTimeout(function(){
    //         bot.sendMessage(msg.chat.id, pesan) 
    //     }, 1000)
    //     bot.sendMessage(msg.chat.id, "Silahkan device yang ingin di cek", {
    //         "reply_markup": {
    //             "keyboard": [["Dose","Main"],["Station","Sensor"]]
    //             }
    //         });
    //   }
    // if (kode_kebun_dose.find(element => element == msg.text))  {
    //     let index = arr_dose.findIndex(element=> 'DOSE_'+element.kode_kebun === msg.text)
    //     let pesan = "Data Terakhir dari Kode Kebun " + arr_dose[index].kode_kebun + " diupdate pada tanggal " + arr_dose[index].time 
        
        
    //     console.log(pesan);
    //     bot.sendMessage(msg.chat.id, "Hallo kamu ingin mengecek kebun : " + msg.text)
    //     setTimeout(function(){
    //         bot.sendMessage(msg.chat.id, pesan) 
    //     }, 1000)
    //     bot.sendMessage(msg.chat.id, "Silahkan device yang ingin di cek", {
    //         "reply_markup": {
    //             "keyboard": [["Dose","Main"],["Station","Sensor"]]
    //             }
    //         });
    //   }
    //   if (kode_kebun_station.find(element => element == msg.text))  {
    //     let index = arr_station.findIndex(element=> 'STATION_'+element.kode_kebun === msg.text)
    //     let pesan = "Data Terakhir dari Kode Kebun " + arr_station[index].kode_kebun + " diupdate pada tanggal " + arr_station[index].time 
        
        
    //     console.log(pesan);
    //     bot.sendMessage(msg.chat.id, "Hallo kamu ingin mengecek kebun : " + msg.text)
    //     setTimeout(function(){
    //         bot.sendMessage(msg.chat.id, pesan) 
    //     }, 1000)
    //     bot.sendMessage(msg.chat.id, "Silahkan device yang ingin di cek", {
    //         "reply_markup": {
    //             "keyboard": [["Dose","Main"],["Station","Sensor"]]
    //             }
    //         });
    //   }
    // if (kode_kebun_sensor.find(element => element == msg.text))  {
    //     let index = arr_sensor.findIndex(element=> 'SENSOR_'+element.kode_kebun === msg.text)
    //     let pesan = "Data Terakhir dari Kode Kebun " + arr_sensor[index].kode_kebun
    //     let zona = arr_sensor[index].zona
    //     console.log(zona[0].no);
    //     for(let i = 0; i<zona.length; i++){
    //         console.log(i);
    //         setTimeout(function(){
    //             bot.sendMessage(msg.chat.id, 
    //                 "Zona : " + zona[i].no + "\n" +
    //                 "Date : " + zona[i].date + "\n" +
    //                 "Time : " + zona[i].time + "\n" +
    //                 "Suhu : " + zona[i].temp + "\n" +
    //                 "Kelembaban Udara : " + zona[i].hum + "\n" +
    //                 "Tekanan Udara : " + zona[i].pressure + "\n" +
    //                 "Suhu Tanah : " + zona[i].soilt + "\n" +
    //                 "Kelambaban Tanah : " + zona[i].mois + "\n" +
    //                 "Cahaya : " + zona[i].light + "\n" +
    //                 "Nutrisi : " + zona[i].nutr + "\n"
    //                 )  
                
    //         }, 1000)
    //     }
        

    //     bot.sendMessage(msg.chat.id, "Silahkan device yang ingin di cek", {
    //         "reply_markup": {
    //             "keyboard": [["Dose","Main"],["Station","Sensor"]]
    //             }
    //         });
        
    // }
    
  
  });

  bot.onText(/\/start/, (msg) => {
        
    bot.sendMessage(msg.chat.id, "Hallo", {
    "reply_markup": {
        "keyboard": [["Cek Suhu","Cek Amonia"],["Cek Ph","Cek Semua Sensor"]]
        }
    });
    
    });





