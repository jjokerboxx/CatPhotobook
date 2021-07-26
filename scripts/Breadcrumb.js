"use strict";

function Breadcrumb({$app, initialState}){

    //초기화
    this.state = initialState;
    this.$target = document.createElement('nav');
    this.$target.className = "Breadcrum";
    $app.appendChild(this.$target);
    this.setState = (state) => {
        this.state = state;
        this.render();
    }
    this.render = () => {

        // root에서는 렌더링을 제한하려면?


        this.$target.innerHTML = "";
        // Breadcrum은 상위 디렉토리를 탐색해야한다...
        const arry = this.state.map( (node, index) => 
        `<div id="${index}">
        ${node.name}
        </div>`);
        this.$target.innerHTML = "root" + arry.join(" - ");
    }
    
    //초기화(객체 생성시)하면서 화면 렌더링
    // if (this.state !== "root") {
    //     this.render();
    // }

    // 일단 방법을 찾기전에는 렌더링하기
    this.render();

}
//https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/images/a2i.jpg
//https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}
export default Breadcrumb