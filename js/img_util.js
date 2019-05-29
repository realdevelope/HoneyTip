
let currentPageName = 'none'; /* current page 저장 변수 */
let currentPage = 0;

const imgDataMap = { 
	'황궁': ["숭실대_쟁반짜장.jpg", "숭실대_탕짜볶.jpg", "숭실대_황궁_짬짜탕.jpg", "숭실대_황궁.jpg"]
};

const PATH = getPathName();

function loadImgData() {
	let arr = imgDataMap[currentPageName];
	if(arr == undefined || arr == null) return;

	++currentPage;

	if(currentPage >= arr.length) 
		currentPage = 0;

	setImg(getImgPath(arr[currentPage]));
}


function setCurrentPage(name) {
	currentPage = 0;
	currentPageName = name;

	let arr = imgDataMap[name];
	if(arr == undefined || arr == null) {
		setImg("");
		return;
	}

	setImg(getImgPath(arr[currentPage]));
	//이미지 초기화
}

function setImg(path) {
	let tag = document.getElementById("img-box");
	tag.style.backgroundImage = "url('" + path + "')";
}

function getPathName() {
	var pathArr = window.location.pathname.split('/');
	var resultPath = '';
	let len = pathArr.length;

	for(let i = 0; i < len - 1; i++) {
		resultPath += (pathArr[i] + "/");
	}

	return resultPath + "/resource/";
}

function getImgPath(imgName) {return PATH + imgName;}