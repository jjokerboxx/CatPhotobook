"use strict";

function Nodes($app, initialState, api){

    //초기화
    this.state = initialState;
    this.$target = document.createElement('ul');
    this.$target.className = "Created-Nodes";
    $app.appendChild(this.$target);
    this.setState = (state) => {
        this.state = state;
        this.render();
    }
    this.render = () => {
        //state에는 node라는 Array-attribute가 있음
        //나였으면 for문으로 했을 것을 map으로 매우 깔끔한 코드로 작성됨...!
        this.$target.innerHTML += this.state.map(node => `<li>${node.name}
                                                            ${node.type == "DIRECTORY" ? '<div><img src ="../assets/folder.png"></div>' : '<div>Im not directory</div>'}
                                                            <div><img src=${api + node.filePath}></div>
                                                          </li>`);
        this.$target.style.display = this.state ? "block" : "none";

    }
    
    //초기화하면서 화면 렌더링
    this.render();
    console.log(this.state);
}
//https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/images/a2i.jpg
export default Nodes