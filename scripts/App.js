"use strict";

import request from "./api.js";
import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";


function App($app){
    this.state = {
        isRoot: true,
        depth: [],
        nodes: []
    };


    const breadcrumb = new Breadcrumb({$app, initialState: this.state.depth}); 
    const node = new Nodes({
        $app, 
        initialState: this.state, 
        onMetClick: async (e) => {
            const newResponse = await request('images/' + e.target.id);
        },
        onGateClick: async (e) => { 
            const newResponse = await request(e.target.id);
            console.log(newResponse);
            this.setState({
                ...this.state,
                isRoot : false,
                nodes : newResponse
            });
        },
        onBackClick: async (e) => {
            // const backResponse = await request(e.target.id); 
            console.log("Go Back!!");
        }
    });

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumb.setState(this.state.depth);
        node.setState(this.state);
            // isRoot : this.state.isRoot,

        console.log(this.state);
    }

    const init = async () => {
        const response = await request();
        this.setState({
            depth: [],
            isRoot: true,
            nodes: response
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