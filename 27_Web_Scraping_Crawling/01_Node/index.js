import fs from "fs"

//  const response = await fetch("https://www.proshop.dk/Baerbar-computer");
//  const result = await response.text();
// fs.writeFileSync("index.html", result)
//console.log(result)

import {load} from "cheerio"

const htmlPageString = fs.readFileSync("index.html").toString();

const $ = load(htmlPageString)

$("#products [product]").each((index, element) => {
    const something = $(element).find(".site-product-link").text();
    
    const name = $(element).find(".site-product-link h2").text();
    const price = $(element).find(".site-currency-lg").text();
    console.log(something)
    console.log(name)
    console.log(price)
    console.log("______")
})





