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


    const breadcrumb = new Breadcrumb({$app, initialState: this.state.depth, isRoot: this.state.isRoot}); 
    const node = new Nodes({
        $app, 
        initialState: this.state, 
        onMetClick: async (e) => {
            console.log("File clicked!")
            try {
                // const img = document.createElement('img');
                // img.className = "Cat";
                // img.src = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${e.target.id}`;
                // e.target.appendChild(img);
                e.target.src = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${e.target.id}`;
            } catch (error) {
                console.log(error);
            }
        },
        onGateClick: async (e) => { 
            const newResponse = await request(e.target.id);
            const obj = {
                id : e.target.id,
                name : e.target.name
            }
            this.state.depth.push(obj);
            console.log(newResponse);
            this.setState({
                ...this.state,
                isRoot : false,
                nodes : newResponse
            });
        },
        onBackClick: async (e) => {
            let arry = this.state.depth;
            // const last = this.state.depth.pop();
            arry.pop();
            const last = arry.length === 0 ? null : arry[arry.length-1].id; 
            if(last == null){
                const backResponse = await request(); 
                this.setState({
                    ...this.state,
                    isRoot: true,
                    nodes: backResponse
                });
            }
            else{
                const backResponse = await request(last); 
                console.log(backResponse);
                this.setState({
                    ...this.state,
                    isRoot: this.state.depth.length ? false : true,
                    nodes: backResponse
                });
            }
            
            console.log("Go Back!!");
        }
    });

    this.setState = (nextState) => {
        this.state = nextState;
        breadcrumb.setState(this.state);
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