/** 事件委托，在form元素上注册事件处理程序 **/
document.querySelector("form").addEventListener("focusin", (event) => {
	let id = event.target.id.slice(0, -6);
	// console.log(id);
	if(id !== "") {   //排除提交按钮
		showHint(id);
	}
}, false);

document.querySelector("form").addEventListener("focusout", (event) => {
	let id = event.target.id.slice(0, -6);
	verifyData(id);
}, false);

/** 控制输入提示块显示的函数 **/
function showHint(id) {
	document.getElementById(id + "_blank").style.display = "none";
	document.getElementById(id + "_hint").style.display = "block";
	document.getElementById(id + "_empty").style.display = "none";
	document.getElementById(id + "_success").style.display = "none";
	document.getElementById(id + "_failed").style.display = "none";
}

function showEmpty(id) {
	document.getElementById(id + "_blank").style.display = "none";
	document.getElementById(id + "_hint").style.display = "none";
	document.getElementById(id + "_empty").style.display = "block";
	document.getElementById(id + "_success").style.display = "none";
	document.getElementById(id + "_failed").style.display = "none";
	document.getElementById(id + "_input").style.border = "1px solid #e32838";
}

function showSuccess(id) {
	document.getElementById(id + "_blank").style.display = "none";
	document.getElementById(id + "_hint").style.display = "none";
	document.getElementById(id + "_empty").style.display = "none";
	document.getElementById(id + "_success").style.display = "block";
	document.getElementById(id + "_failed").style.display = "none";
	document.getElementById(id + "_input").style.border = "1px solid #71c159";
}

function showFailed(id) {
	document.getElementById(id + "_blank").style.display = "none";
	document.getElementById(id + "_hint").style.display = "none";
	document.getElementById(id + "_empty").style.display = "none";
	document.getElementById(id + "_success").style.display = "none";
	document.getElementById(id + "_failed").style.display = "block";
	document.getElementById(id + "_input").style.border = "1px solid #e32838";
}

/** 验证输入数据是否合法的函数 **/
function verifyData(id) {
	switch(id) {
		case "name":
			verifyName();
			break;
		case "pwd":
			verifyPwd();
			break;
		case "pwd2":
			verifyPwd2();
			break;
		case "email":
			verifyEmail();
			break;
		case "phone":
			verifyPhone();
			break;
	}
}

function verifyName() {
	let str = document.getElementById("name_input").value;
	// console.log(str);
	let len = str.replace(/[^\x00-\xff]/ig, "**").length;
	// console.log(len);
	if(len === 0) {  //输入为空
		showEmpty("name");
		return false;
	} else if(len < 4 || len > 16) {  //输入长度不符要求
		showFailed("name");
		return false;
	} else {  //输入正确
		showSuccess("name");
		return true;
	}
}

function verifyPwd() {
	let str = document.getElementById("pwd_input").value;
	let len = str.length;
	if(len === 0) {
		showEmpty("pwd");
		return false;
	} else if(len < 6) {
		showFailed("pwd");
		return false;
	} else {
		showSuccess("pwd");
		return true;
	}
}

function verifyPwd2() {
	let str1 = document.getElementById("pwd_input").value,
		str2 = document.getElementById("pwd2_input").value;
	let len = str2.length;
	if(len === 0) {
		showEmpty("pwd2");
		return false;
	} else if(str2 !== str1) {
		showFailed("pwd2");
		return false;
	} else {
		showSuccess("pwd2");
		return true;
	}
}

function verifyEmail() {
	let str = document.getElementById("email_input").value;
	if(str.length === 0) {
		showEmpty("email");
		return false;
	} else if(!(/^[A-Za-z_]+[\w_]*@[\w]+(\.[a-z]+)+$/.test(str))){
		showFailed("email");
		return false;
	} else {
		showSuccess("email");
		return true;
	}
}

function verifyPhone() {
	let str = document.getElementById("phone_input").value;
	if(str.length === 0) {
		showEmpty("phone");
		return false;
	} else if(!(/^1[34578]\d{9}$/.test(str))){
		showFailed("phone");
		return false;
	} else {
		showSuccess("phone");
		return true;
	}
}

/** 为提交按钮注册事件监听程序 **/
document.querySelector("#submit").addEventListener("click", () => {
	if(verifyName() && verifyPwd() && verifyPwd2() && verifyEmail() && verifyPhone()) {
		alert("恭喜，提交成功！");
	} else {
		alert("输入有误！请重新输入后提交");
	}
}, false);
