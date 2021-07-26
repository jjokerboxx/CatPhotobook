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
    const nodePage = new Nodes({$app, initialState: this.state.nodes, onClick: async (e) => { const newResponse = await request(e.target.id);
        console.log(newResponse);
        //setState를 통해 페이지를 초기화 + 렌더링
        this.setState({
            ...this.state,
            isRoot : true,
            nodes:newResponse
        });
    }});

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumPage.setState(this.state.depth);
        nodePage.setState(this.state.nodes);
            // isRoot : this.state.isRoot,

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

    // this.handleClick = async (event) => {
    //     const newResponse = await request(event.target.id);
    //     console.log(newResponse);
    //     //setState를 통해 페이지를 초기화 + 렌더링
    //     this.setState(newResponse);
    // }
    
        
}

export default App