"use strict";

import request from "./api.js";
import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import App from "./App.js";


// access to DOM elem + manipulate it with Event Listener
const $app = document.querySelector(".App");
new App($app);

// let breadcrumPage = new Breadcrumb($bread, response);
// let nodePage = new Nodes($node, response);


//위치를 App 안으로 옮기기!
const gates = document.querySelectorAll(".Gate");
const handleClick = async (event) => {
    console.log(event.target.id);
    const newResponse = await request(event.target.id);
    console.log(newResponse);
    //setState를 통해 페이지를 초기화 + 렌더링
    nodePage.setState(newResponse);
}
//어떻게하면 모든 Gate 클래스 얘들에게 이벤트 리스너를 부착할 수 있을까?
gates.forEach(node => node.addEventListener("click", handleClick));
//그래!! map은 array를 리턴하지 작동하는 로직을 하려면 그냥 for loop가 정답이야!!
