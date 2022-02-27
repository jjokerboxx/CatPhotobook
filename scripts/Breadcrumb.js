"use strict";

function Breadcrumb({ $app, initialState, isRoot }) {
	//초기화
	//state는 Array이다.
	this.state = initialState;
	this.isRoot = isRoot;
	console.log(this.isRoot);
	this.$target = document.createElement("nav");
	this.$target.className = "Breadcrumb";
	$app.appendChild(this.$target);

	this.setState = (state) => {
		this.state = state.depth;
		this.isRoot = state.isRoot;
		this.render();
	};

	this.render = () => {
		this.$target.innerHTML = "";
		// Breadcrum은 상위 디렉토리를 탐색해야한다...
		const arry = this.state.map(
			(node) =>
				`<span id="${node.id}">
        ${node.name}
        </span>`
		);
		if (!this.isRoot) {
			this.$target.innerHTML = "root - " + arry.join(" - ");
		}
	};

	// 일단 방법을 찾기전에는 렌더링하기
}

export default Breadcrumb;
