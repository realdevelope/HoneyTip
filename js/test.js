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