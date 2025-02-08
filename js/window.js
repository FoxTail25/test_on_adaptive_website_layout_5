const bg_canvas = document.getElementById('bg_canvas_id')

function getWindowWidth() {
	const windowInnerWidth = document.documentElement.clientWidth;
	console.log(windowInnerWidth)
	bg_canvas.style.width = windowInnerWidth + 'px';
}
getWindowWidth()

window.addEventListener('resize', getWindowWidth)
