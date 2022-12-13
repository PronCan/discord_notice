const axios = require("axios");
// import axios from 'axios';
//import json from './key.json';
//const json = require("./key.json");
const key = "https://discord.com/api/webhooks/1052026751368319027/ckxz1IW8XrN2Itskvzf0EFBjg41dsgz6RrMUORXZd0m5HJz5JswDPI3nMKlENaueqg2V";
const key_test = "https://discord.com/api/webhooks/1052092847794421760/TE31bONmH84QvkpnlRpb3yelW2j8yjnd8idyi_meAj4zRSUsyuUR-vLM43lCbf8i1L9B";
const yongkimchi = "https://discord.com/api/webhooks/1052100808969310268/spQECP2iG5Ampf47RTAsFw-4jeKqXjD0bGQZ2-rvKT8XZg9kMvMuVXhMdthkhMT_P_6O";

//const key = json.key;

exports.handler = async(event) => {
    try {
        let date = new Date();
        let month = date.getMonth()+1;
        let day = date.getDate();
        
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        // discord url, content
        switch(time) {
            // case 
        }
        const result = await axios.post(key, {
            "content": "test message"
        });
        console.log("success", result);
    }catch(e) {
        console.err("faild", e);
    }

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
