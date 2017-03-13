let wrapper = document.querySelector("div#wrapper");
let inputNode = document.getElementById("num");

let count = 0;     //队列元素计数器
let heights = [];  //队列元素的高度

//创建子节点
const createNode = num => {
	let item = document.createElement("div");
	item.style = "padding: 12px; margin: 2px; background-color: red; display: inline-block;";
	item.style.height = (parseInt(num)).toString() + "px";
	// item.innerHTML = num.toString();
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
	// alert(removedNode.innerHTML);
};

const rightOut = () => {
	let removedNode = wrapper.removeChild(wrapper.lastElementChild);
	// alert(removedNode.innerHTML);
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

//判断数字是否在10-100
const numRange = num => {
	if(num >= 10 && num < 100) {
		return true;
	} else {
		return false;
	}
};

//判断输入的值是否为数字
const isNum = val => {
	let regExp = /^\d+$/;
	if (regExp.test(val)) {
		return numRange(parseInt(val));
	} else {
		return false;
	}
};

//分别为四个按钮绑定onclick事件处理函数
document.getElementById("left_in").onclick = () => {
	let val = getValue();
	if(isNum(val)) {
		if(count < 60) {
			leftIn(val);
			count++;
			// console.log(count);
			heights.unshift(parseInt(val));
			// console.log(heights);
		} else {
			alert("There is most 60 nodes.");
			inputNode.focus();
		}
	} else {
		alert("Please input a number between 10 and 100.");
		inputNode.focus();
	}
};

document.getElementById("right_in").onclick = () => {
	let val = getValue();
	if(isNum(val)) {
		if(count < 60) {
			rightIn(val);
			count++;
			// console.log(count);
			heights.push(parseInt(val));
			// console.log(heights);
		} else {
			alert("There is most 60 nodes.");
			inputNode.focus();
		}
	} else {
		alert("Please input a number between 10 and 100.");
		inputNode.focus();
	}
};

document.getElementById("left_out").onclick = () => {
	leftOut();
	count--;
	// console.log(count);
	alert(heights.shift());
	// console.log(heights);
};

document.getElementById("right_out").onclick = () => {
	rightOut();
	count--;
	// console.log(count);
	alert(heights.pop());
	// console.log(heights);
};

//冒泡排序
const bubbleSort = arr => {
	for(let i = 0, len = arr.length; i < len; i++) {
		for(let j = 0, stop = len - i - 1; j < stop; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}
};
const swap = (arr, m, n) => {
	let temp = arr[m];
	arr[m] = arr[n];
	arr[n] = temp;
};

document.getElementById("bubble_sort").onclick = () => {
	bubbleSort(heights);
	wrapper.innerHTML = "";
	for(let height of heights) {
		rightIn(height);
	}
};
