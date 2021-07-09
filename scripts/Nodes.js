"use strict";

const Nodes = ($app, initialState) => {

    //초기화
    this.state = initialState;
    this.$target = document.createElement('ul');
    this.$app.appendChild(this.$target);
    this.setState = (state) => {
        this.state = state;
        this.render();
    }
    this.render = () => {
        //state에는 node라는 Array-attribute가 있음
        this.$target.innerHTML += this.state.nodes.map(node => `<li>${node.name}</li>`);
    }
    
    //초기화하면서 화면 렌더링
    this.render();
}

export default Nodes