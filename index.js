const axios = require("axios");
// import axios from 'axios';

const key = "https://discord.com/api/webhooks/1052026751368319027/ckxz1IW8XrN2Itskvzf0EFBjg41dsgz6RrMUORXZd0m5HJz5JswDPI3nMKlENaueqg2V";


exports.handler = async(event) => {
    try {
        // discord url, content
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
