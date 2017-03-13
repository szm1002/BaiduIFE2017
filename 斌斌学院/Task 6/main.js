let wrapper = document.querySelector("div#wrapper");
// let inputNode = document.getElementById("num");
let inputNode = document.getElementById("text_input");

//创建子节点
const createNode = num => {
	let item = document.createElement("div");
	item.style = "padding: 10px; margin:8px; background-color: red; display: inline-block;";
	item.className = "innerNodes";
	item.innerHTML = num.toString();
	return item;
};

//四个按钮分别需要绑定的函数
const leftIn = num => {
	let item = createNode(num);
	wrapper.insertBefore(item, wrapper.firstElementChild);
};

const rightIn = num => {
	let item = createNode(num);
	wrapper.appendChild(item);
};

const leftOut = () => {
	let removedNode = wrapper.removeChild(wrapper.firstElementChild);
	alert(removedNode.innerHTML.replace(/<[^<]*>/gi, ""));
};

const rightOut = () => {
	let removedNode = wrapper.removeChild(wrapper.lastElementChild);
	alert(removedNode.innerHTML.replace(/<[^<]*>/gi, ""));
};

/*获取输入的值，
文本输入框允许一次批量输入多个内容，
通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔*/
const getValue = () => {
	let regexp = /[\n\u002c\uff0c\u3001\u3000\u0020\t]+/;
	let val = inputNode.value.split(regexp);
	// console.log(val);
	return val;
};

//分别为四个按钮绑定onclick事件处理函数
document.getElementById("left_in").onclick = () => {
	let val = getValue();
	for(let item of val) {
		leftIn(item);
	}
};

document.getElementById("right_in").onclick = () => {
	let val = getValue();
	for(let item of val) {
		rightIn(item);
	}
};

document.getElementById("left_out").onclick = () => {
	leftOut();
};

document.getElementById("right_out").onclick = () => {
	rightOut();
};

//查询关键字并高亮显示
document.getElementById("query_text").onclick = () => {
	let keyword = document.getElementById("keyword").value;
	// console.log(`${keyword}`);
	let innerNodes = document.getElementsByClassName("innerNodes");
	let formerText, latterText;
	for(let innerNode of innerNodes) {
		formerText = innerNode.innerHTML.replace(/<[^<]*>/gi, "");
		innerNode.innerText = formerText;
		latterText = formerText;
		if(formerText.indexOf(keyword) !== -1) {
			// console.log(`${keyword}`);
			latterText = formerText.replace(eval('/'+keyword+'/g'), `<span style="color: blue; font-weight: bold;">${keyword}</span>`);
		}
		innerNode.innerHTML = latterText;
	}
};
