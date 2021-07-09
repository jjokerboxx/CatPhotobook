"use strict";

import request from "./api.js";

const api = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/";

let node = await request(api)



// access to DOM elem
let cat = document.querySelector(".cat");
// create new DOM elem
const $node = document.createElement('div');
$node.setAttribute("class", "dog");
$node.innerText= "dogo";
// render(or attach) created DOM elem
cat.appendChild($node);