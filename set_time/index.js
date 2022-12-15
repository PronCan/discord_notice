const axios = require("axios");
// import axios from 'axios';
const s_json = require("./key.json");
const s_data_string = require("./data.json");

const setUTCtoKor = 9*60*60*1000;
const babo = s_json.babo;
//const bosam_def = json.bosam_def;
// const bosam_poke = s_json.bosam_poke;

exports.handler = async(event) => {
    try {
        let date = new Date().toLocaleString();
        //example endDate
        //let dateData = new Date(data.data[0]);
        let resText = s_json;
        // discord url, content
        // const result = await axios.post(bosam_poke, {
        const result = await axios.post(babo, {
            "content": date
        });
        console.log("success", result);
    }catch(e) {
        console.log("faild", e);
    }

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
