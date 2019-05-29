const WRITER_TAG_ID = 'writer';

/**
	@param text 채울 텍스트 인자
	@param tag 텍스트 박스 태그 이름 
*/
function fillTextbox(text) {
	let tagElement = document.getElementById(WRITER_TAG_ID);
	if(tagElement == null) return;

	tagElement.innerHTML = text;
}


/**
	사이트의 경로를 바꿔주는 함수

	@param src 바꿀 사이트 경로
*/
function changePage(src) {
	window.location.href = src;
}
