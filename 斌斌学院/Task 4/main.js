let wrapper = document.querySelector("div#wrapper");
let inputNode = document.getElementById("num");

//创建子节点
const createNode = num => {
	let item = document.createElement("div");
	item.style = "padding: 10px; margin:8px; background-color: red; display: inline-block;";
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
	alert(removedNode.innerHTML);
};

const rightOut = () => {
	let removedNode = wrapper.removeChild(wrapper.lastElementChild);
	alert(removedNode.innerHTML);
};

// leftIn(12);
// rightIn(10);
// leftIn(65);
// rightIn(77);

// setTimeout(leftOut, 1000);
// setTimeout(rightOut, 2000);

//获取输入的值
const getValue = () => {
	let val = inputNode.value;
	return val;
};

//判断输入的值是否为数字
const isNum = (val) => {
	let regExp = /^\d+$/;
	if (regExp.test(val)) {
		return true;
	} else {
		return false;
	}
};

//分别为四个按钮绑定onclick事件处理函数
document.getElementById("left_in").onclick = () => {
	let val = getValue();
	if(isNum(val)) {
		leftIn(val);
	} else {
		alert("Please input a number.");
		inputNode.focus();
	}
};

document.getElementById("right_in").onclick = () => {
	let val = getValue();
	if(isNum(val)) {
		rightIn(val);
	} else {
		alert("Please input a number.");
		inputNode.focus();
	}
};

document.getElementById("left_out").onclick = () => {
	leftOut();
};

document.getElementById("right_out").onclick = () => {
	rightOut();
};
