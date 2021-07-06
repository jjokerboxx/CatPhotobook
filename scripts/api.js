"use strict";

const rootapi = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
const api = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/";
let nodeid = 1

let arry = [0];

// const request = (nodeID) => {
//     fetch(nodeID)
//     .then(res => {
//         if(!res.ok){
//             throw new Error('http 오류')
//         }
//         return res.json()})
//     .then(data => {return JSON.stringify(data)})
//     .catch(e => alert(e.message))
// }
let cat = document.querySelector(".cat");
console.log(cat);
const request = (nodeID) => {
    fetch(nodeID)
    .then(res => res.json())
    .then(data => {cat.innerHTML += data[0].name})
}
let data = request(api);


const $node = document.createElement('div');
$node.setAttribute("class", "dog");
$node.innerText= "dogo";

cat.appendChild($node);


            //arry with object elems


// for (let j = 0; j < arry.length; j++) {
//     document.getElementsByClassName("cat").innerHTML += arry[j].name
// }
