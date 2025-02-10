const bg_canvas = document.getElementById('bg_canvas_id')

function getWindowWidth() {
	const windowInnerWidth = document.documentElement.clientWidth;
	console.log(windowInnerWidth);
	+windowInnerWidth < 1160 
	?	bg_canvas.style.width = windowInnerWidth + 'px'
	:	bg_canvas.style.width = '1160px'
	 
}
getWindowWidth()

window.addEventListener('resize', getWindowWidth)
