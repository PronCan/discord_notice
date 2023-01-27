const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 4000;
const app = express();
app.use(cors());

const sv_url = 'https://game8.co/games/Pokemon-Scarlet-Violet/archives/369145';

const getHtml = async () => {

  try {
    return await axios.get(sv_url);
    // 해당 사이트 html 태그 가져오기
  } catch (error) {
    console.error(error);
  }
};

app.get("/", (req, res) => {
  getHtml()
    .then((html) => {
      const $ = cheerio.load(html.data);
      let parentTag = $(".archive-style-wrapper table.a-table");
      // 크롤링할 태그 찾기
      console.log(parentTag);
      let resultArr = [];
      parentTag.each(function (i, elem) {
        let itemObj = 
            $(this).find("tbody tr:nth-child(3)").text()
        resultArr.push(itemObj);
      });

    //   resultArr.forEach((elem) => {
    //     console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
    //   });
      return resultArr;
    })
    .then((data) => res.send(data));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);