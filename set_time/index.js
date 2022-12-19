const axios = require("axios");
// import axios from 'axios';
const s_key = require("./key.json");
const s_data = require("./data.json");

const babo = s_key.key; // 일반채팅
const riolu = s_key.riolu; // 딴겜

exports.handler = async(event) => {
    try {
        let date = new Date().toLocaleString();
        // let content = setCouponContent();
        let content = setEventContent();
        // discord url, content
        const result = await axios.post(riolu, {
            // "content": content
            "content": content
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

function setCouponContent() {
    let coupon = s_data.coupon;
    let res = '';
    let len = coupon.length;
    res += "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n";
    for(let idx = 0; idx<len-1; idx++) {
        res += "* " + coupon[idx].code;
        res += " => " + coupon[idx].content +'\n'
        res += " 종료일자: " + coupon[idx].end_date + '\n'
        res += "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n";
    }
    return res;
}

function setEventContent() {
    let event = s_data.event;
    let res = '';
    let len = event.length;
    res += "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n";
    for(let idx = 0; idx<len-1; idx++) {
        res += "* " + event[idx].title;
        res += " => " + event[idx].content +'\n'
        res += " 기간: " + event[idx].start_date + "\n  ~ ";
        res += event[idx].end_date;
        res += "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n";
    }
    return res;
}
