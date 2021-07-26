"use strict";

function Breadcrumb({$app, initialState}){

    //초기화 
    //state는 Array이다.
    this.state = initialState;
    this.$target = document.createElement('nav');
    this.$target.className = "Breadcrum";
    $app.appendChild(this.$target);

    this.setState = (state) => {
        this.state = state;
        this.render();
    }

    this.render = () => {

        this.$target.innerHTML = "";
        // Breadcrum은 상위 디렉토리를 탐색해야한다...
        const arry = this.state.map( (node, index) => 
        `<div id="${index}">
        ${node.name}
        </div>`);
        this.$target.innerHTML = "root" + arry.join(" - ");
    }
    
    // 일단 방법을 찾기전에는 렌더링하기
    this.render();

}

export default Breadcrumb