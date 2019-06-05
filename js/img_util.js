
let currentPageName = 'none'; /* current page 저장 변수 */
let currentPage = 0;

const imgDataMap = { 
	'연래춘': ["연래춘2.jpg","연래춘.jpg","연래춘3.jpg","연래춘4.jpg"],
	'청운식당': ["청운식당.jpg","청운식당3.jpg","청운식당4.jpg","청운식당5.PNG"],
	'논두렁 갈비' : ["논두렁갈비.jpg","논두렁갈비2.jpg","논두렁갈비3.jpg","논두렁갈비4.jpg"],
	'밀알식당' : ["밀알식당4.jpg","밀알식당5.jpg","밀알식당3.jpg","밀알식당6.jpg",],
	'열정식당' : ["열정식당.jpg","열정식당2.jpg","열정식당3.jpg"],
	'맥도날드' : ["맥도날드.jpg","맥도날드2.jpg","맥도날드3.jpg","맥도날드5.jpg"],
	'지지고' : ["지지고3.PNG","지지고.jpg","지지고2.jpg","지지고4.jpg"],
	'백채' : ["백채.jpg","백채2.jpg","백채3.jpg","백채5.jpg","백채4.jpg"],
	'쥬시' : ["쥬시.png","쥬시2.PNG","쥬시3.jpg","쥬시4.jpg"],
	'봄봄' : ["봄봄.jpg","봄봄3.jpg","봄봄2.jpg"],
	'nickys Take Out' : [,"니키.jpg",,],
	'명한의원' : ["명한의원.jpg","명한의원2.jpg","명한의원3.jpg"],
	'에코이비인후과' : ["에코이비인후과.jpg","에코이비인후과2.jpg","에코이비인후과3.jpg","에코이비인후과4.jpg"]
};

const PATH = getPathName();

function loadImgData(up) {
	let arr = imgDataMap[currentPageName];
	if(arr == undefined || arr == null) return;

	if(up) ++currentPage;
	else --currentPage;

	if(currentPage >= arr.length) 
		currentPage = 0;
	else if(currentPage < 0)
		currentPage = arr.length-1

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