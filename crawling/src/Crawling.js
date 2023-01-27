import React from 'react'

export const Crawling = () => {
    
    const axios = require('axios');
    const cheerio = require('cheerio');
    const sv_url = 'https://game8.co/games/Pokemon-Scarlet-Violet/archives/369145';


        const getHtml = async () => {
            try {
                const html = await axios.get(sv_url);
                const $ = cheerio.load(html.data);
                // const bodyList = $()

                console.log("success". $);
            } catch(err) {
                console.error(err);
            }
        }

  return (
    <>{getHtml}</>
  )
}

export default Crawling