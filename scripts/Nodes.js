"use strict";

function Nodes($app, initialState){

    //초기화
    this.state = initialState;
    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);
    this.setState = (state) => {
        this.state = state;
        this.render();
    }
    this.render = () => {
        //state에는 node라는 Array-attribute가 있음
        //나였으면 for문으로 했을 것을 map으로 매우 깔끔한 코드로 작성됨...!
        this.$target.innerHTML += this.state.map(node => `<li>${node.name}<div>${node.type} <img src="${node.filePath}"></div></li>`);

    }
    
    //초기화하면서 화면 렌더링
    this.render();
}

export default Nodes