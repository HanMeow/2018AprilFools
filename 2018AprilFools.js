var canvas, stage, exportRoot, game;
var lib = {}; //函數庫
const cjs = createjs;
var log = console.log; //shortcut

var init = () =>{  
    canvas = document.getElementById("MyCanvas");
  
    exportRoot = new lib.root();
  	stage = new cjs.Stage("MyCanvas");
  	stage.addChild(exportRoot);
  	cjs.Ticker.framerate = 30;
  	cjs.Ticker.addEventListener("tick", stage);
  	cjs.Ticker.addEventListener("tick", Ticking);
	//document.addEventListener("keydown", KeydownHandler);

	document.getElementById("menuBtn").addEventListener('click', menuClick);
  
    window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	game = {target: { x: 250 ,y: 0 },
			solarAtr: 1,
		 	throw: false,
		 	throwSpeed: 60,
		 	keys: {keyW: 0, keyS: 0, keyA: 0, keyD: 0, keyLt: 0, keyUp: 0, keyRt: 0, keyDn: 0, TouchF: 0}
		 	};
  
    canvas.addEventListener('contextmenu', function(e){e.preventDefault();});
  
    //canvas.addEventListener('mousedown', MouseDown);
    //canvas.addEventListener('mouseup', MouseUp);
    canvas.addEventListener('mousemove', MouseMove);

	canvas.addEventListener('touchmove', TouchMove);
	canvas.addEventListener('touchend', TouchEnd);
    
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
}

var menuClick = e=>{
	let menu = document.getElementById("menu");
	if(menu.style.display == 'none')menu.style.display = 'block';
	else menu.style.display = 'none';
}

var MouseDown = e =>{
    //log(e.which);
    if(e.which==1){
       //exportRoot.mouseImg.left.filters = [ new cjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.left.cache(-50,0,50,50);
    }else if(e.which==2){
       //exportRoot.mouseImg.mid.filters = [ new cjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.mid.cache(-5,0,10,50);
    }else if(e.which==3){
       //exportRoot.mouseImg.right.filters = [ new cjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.right.cache(0,0,50,50);
    };
}

const MouseUp = e =>{
    //log(e.which);
    if(e.which==1){
       //exportRoot.mouseImg.left.filters = [];
       //exportRoot.mouseImg.left.cache(-50,0,50,50);
    }else if(e.which==2){
       //exportRoot.mouseImg.mid.filters = [];
       //exportRoot.mouseImg.mid.cache(-5,0,10,50);
    }else if(e.which==3){
       //exportRoot.mouseImg.right.filters = [];
       //exportRoot.mouseImg.right.cache(0,0,50,50);
    };
}

const MouseMove = e =>{
    game.target.x = e.clientX;
    game.target.y = e.clientY;
  	facing();
}

const TouchStart = e =>{
}

const TouchMove = e =>{
	e.preventDefault();
	game.target.x = e.changedTouches["0"].clientX;
	game.target.y = e.changedTouches["0"].clientY;
	game.keys.TouchF = 2;
}

const TouchEnd = e =>{
	e.preventDefault();
	game.keys.TouchF = 0;
}

const facing = () =>{
	let X = game.target.x - exportRoot.Fool.x,
      	Y = exportRoot.Fool.y - game.target.y,
      	R = Math.atan2( X, Y )*180/Math.PI;
    exportRoot.Fool.rotation = R;
}

var keyDown = e =>{
    switch( e.keyCode ){
    	case 37:
			game.keys.keyLt = -2;
			break;
    	case 38:
			game.keys.keyUp = 2;
			break;
    	case 39:
			game.keys.keyRt = 2;
			break;
    	case 40:
			game.keys.keyDn = -2;
			break;
		case 87:
			game.keys.keyW = 2;
			break;
    	case 83:
			game.keys.keyS = -2;
			break;
    	case 65:
			game.keys.keyA = -2;
			break;
    	case 68:
			game.keys.keyD = 2;
			break;
		default:
			break;
	}
}

var keyUp = e =>{
    switch( e.keyCode ){
    	case 37:
			game.keys.keyLt = 0;
			break;
    	case 38:
			game.keys.keyUp = 0;
			break;
    	case 39:
			game.keys.keyRt = 0;
			break;
    	case 40:
			game.keys.keyDn = 0;
			break;
		case 87:
			game.keys.keyW = 0;
			break;
    	case 83:
			game.keys.keyS = 0;
			break;
    	case 65:
			game.keys.keyA = 0;
			break;
    	case 68:
			game.keys.keyD = 0;
			break;
		default:
			break;
	}
}

const Ticking = e =>{
  	walking();
  	solarAtr();
  	if(game.throw)throwing();
}

const walking = ( p = exportRoot.Fool, k = game.keys ) =>{
	let Fspeed = ( k.keyW || k.keyUp || k.TouchF ) + ( k.keyS || k.keyDn ),
      	Rspeed = ( k.keyA || k.keyLt ) + ( k.keyD || k.keyRt),
      	R = p.rotation*Math.PI/180;
  	if(Fspeed || Rspeed){
    	if(Fspeed && Rspeed){
      		Fspeed /= Math.sqrt(2);
      		Rspeed /= Math.sqrt(2);
    	}
	    p.x += Fspeed*Math.sin(R) + Rspeed*Math.sin(R + Math.PI/2);
	    p.y -= Fspeed*Math.cos(R) + Rspeed*Math.cos(R + Math.PI/2);
	    p.play();
	    facing();
  	}else{
    	p.stop();
  	}
}

const solarAtr = ( p = exportRoot.Fool, s = exportRoot.solar ) =>{
	let X = s.x - p.x,
		Y = s.y - p.y,
		R = game.solarAtr/Math.sqrt( X*X + Y*Y );
	p.x += R*X;
	p.y += R*Y;
	if(R>0.01)throwOut();
}

const throwOut = (s = exportRoot.solar) =>{
	s.solar1.gotoAndStop(1);
	s.solar2.gotoAndStop(1);
	s.eye.gotoAndStop(1);
	game.throw = true;
}

const throwing = ( p = exportRoot.Fool, s = exportRoot.solar ) =>{
	p.x -= game.throwSpeed;
	if(p.x<0){
		game.throw = !1;
		exportRoot.moon.visible = !0;
		s.solar1.gotoAndStop(0);
		s.solar2.gotoAndStop(0);
		s.eye.gotoAndStop(0);
	}
}

const resizeCanvas = e =>{

	h = window.innerHeight,
	w = window.innerWidth,
	r = window.devicePixelRatio;

	canvas.style.width = w + "px";
	canvas.style.height = h + "px";

	canvas.width = w;
	canvas.height = h;

	if(exportRoot.solar){
		exportRoot.solar.x = w-100;
		exportRoot.solar.y = h/2;
	}

	if(exportRoot.moon){
		exportRoot.moon.x = 100;
		exportRoot.moon.y = h/2;
	}

	if(null!=stage && null!=canvas){
		var ctx = canvas.getContext("2d");
		stage.clear();
		stage.draw(ctx, false);
	}
}