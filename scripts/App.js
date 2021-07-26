"use strict";

import request from "./api.js";
import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";


function App($app){
    this.state = {
        isRoot: false,
        depth: [],
        nodes: []
    };


    const breadcrumPage = new Breadcrumb({$app, initialState: this.state.depth});
    const nodePage = new Nodes({$app, initialState: this.state.nodes});

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumPage.setState(this.state.depth);
        nodePage.setState(this.state.nodes);


        console.log(this.state);
    }

    const init = async () => {
        const response = await request();
        this.setState({
            ...this.state,
            isRoot : true,
            nodes:response
        });
    }
    
    init();


    

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

    
        
}

export default App