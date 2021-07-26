"use strict";

const endPoint = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (nodeID) => {
    let node = await fetch(`${endPoint}/${nodeID ? nodeID : ''}`);
    return await node.json();

}

export default request






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