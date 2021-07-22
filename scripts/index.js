"use strict";

import request from "./api.js";
import Nodes from "./Nodes.js";

const api = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

let node = await request(api)
console.log(node);



// access to DOM elem
let cat = document.querySelector(".cat");
// create new DOM elem
const $node = document.createElement('div');
$node.setAttribute("class", "dog");
$node.innerText= "dogo";
// render(or attach) created DOM elem
cat.appendChild($node);

const $node1 = document.querySelector(".dog");


let Breadcrumb = new Nodes($node1, node, api);
