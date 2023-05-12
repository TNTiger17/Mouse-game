document.getElementById('mousecursor').setAttribute('draggable', false);
function setMouse(type) {
	cursor = document.getElementById('mousecursor')
	label = document.getElementById('AI1')
	switch (type) {
		case 'normal':
			cursor.src = './images/cursornormal.png'
			cursor.style.animation = 'pulse 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = '...'
			movemouse(event)
			break;
		case 'select':
			cursor.src = './images/cursorselect.png'
			cursor.style.animation = 'pulse 0.1s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Select'
			movemouse(event)
			break;
		case 'no':
			cursor.src = './images/cursorno.png'
			cursor.style.animation = 'pulse 0.4s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Someday'
			movemouse(event)
			break;
		case 'clock':
			cursor.src = './images/cursorclock.png'
			cursor.style.animation = 'spin 1s linear 0s infinite'
			label.innerHTML = 'In time'
			movemouse(event)
			break;
		case 'exit':
			cursor.src = './images/cursorexit.png'
			cursor.style.animation = 'none'
			label.innerHTML = '...'
			movemouse(event)
			break;
		case 'lock':
			cursor.src = './images/cursorlock.png'
			cursor.style.animation = 'none'
			label.innerHTML = 'Not now'
			movemouse(event)
			break;
		case 'pointleft':
			cursor.src = './images/cursorpointleft.png'
			cursor.style.animation = 'pointleft 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Over there'
			movemouse(event)
			break;
		case 'pointright':
			cursor.src = './images/cursorpointright.png'
			cursor.style.animation = 'pointright 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Over there'
			movemouse(event)
			break;
		case 'pointup':
			cursor.src = './images/cursorpointup.png'
			cursor.style.animation = 'pointup 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Up there'
			movemouse(event)
			break;
		case 'pointdown':
			cursor.src = './images/cursorpointdown.png'
			cursor.style.animation = 'pointdown 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = 'Over there'
			movemouse(event)
			break;
		case 'warning':
			cursor.src = './images/cursorwarning.png'
			cursor.style.animation = 'pulse 0.1s ease-in-out 0s infinite alternate'
			label.innerHTML = "ESCAPE"
			movemouse(event)
			break;
		case 'hide':
			cursor.src = './images/cursorhide.png'
			cursor.style.animation = 'pulse 0.2s ease-in-out 0s infinite alternate'
			label.innerHTML = "hide here"
			movemouse(event)
			break;
		case 'hiding':
			cursor.src = './images/cursorhiding.png'
			cursor.style.animation = 'pulse 1s ease-in-out 0s infinite alternate'
			label.innerHTML = ""
			movemouse(event)
			break;
		case 'beat':
			cursor.src = './images/cursorbeat.png'
			cursor.style.animation = 'beat 0.5s ease-in-out 0s infinite'
			label.innerHTML = "feeling"
			movemouse(event)
			break;
		case 'interact':
			cursor.src = './images/cursorinteract.png'
			cursor.style.animation = 'pulse 0.5s ease-in-out 0s infinite alternate'
			label.innerHTML = ""
			movemouse(event)
			break;
			
	}
}
function setProgress() {
	if (AI2timer==5) {progress = 1;}
	switch (progress) {
		case 0:
			document.getElementById('selectbox').style.top = `${Math.random() * 500}`
			document.getElementById('selectbox').style.left = `${Math.random() * 1150}`
			AI2timer += 1
			break;
		case 1:
			document.getElementById('selectbox').style.top = `${Math.random() * 500}`
			document.getElementById('selectbox').style.left = `${Math.random() * 1150}`
			
			break;
	}
}
function fadein() {
	fadebox = document.getElementById('screenfade')
	fadebox.style.display = 'block'
	fadebox.style.animation = 'fadeout 0.5s linear'
	setTimeout(clearfadebox, 500)
}
function clearfadebox() {
	document.getElementById('screenfade').style.display = 'none'
}
function die() {
	let particlesD = []
	for (let i = 0; i < 21; i++) {
		particlesD[i] = {
			x: mouseX,
			y: mouseY,
			xs: -4 + Math.random() * 4 + 2,
			ys: 5
		}
	}
}