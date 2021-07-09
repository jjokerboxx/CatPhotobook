"use strict";



const request = async (nodeID) => {
    let node = await fetch(nodeID);
    return await node.json;

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