var canvas, stage, exportRoot, game;
var lib = {}; //函數庫
var log = console.log; //shortcut

var init = () =>{  
    canvas = document.getElementById("MyCanvas");
  
    exportRoot = new lib.root();
  	stage = new createjs.Stage("MyCanvas");
  	stage.addChild(exportRoot);
  	createjs.Ticker.framerate = 30;
  	createjs.Ticker.addEventListener("tick", stage);
  	createjs.Ticker.addEventListener("tick", walking);
	//document.addEventListener("keydown", KeydownHandler);

	document.getElementById("menuBtn").addEventListener('click', menuClick);
  
    window.addEventListener('resize', resizeCanvas);
	resizeCanvas();

	game = { target: { x: 250 ,y: 0 } };
  
    canvas.addEventListener('contextmenu', function(e){e.preventDefault();});
  
    //canvas.addEventListener('mousedown', MouseDown);
    //canvas.addEventListener('mouseup', MouseUp);
    canvas.addEventListener('mousemove', MouseMove);
    
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
}

var menuClick = e=>{
	let menu = document.getElementById("menu");
	if(menu.style.display == 'none')menu.style.display = 'block';
	else menu.style.display = 'none';
}

(lib.root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.addChild(this.Fool = new lib.Fool());
	this.Fool.parent = this;
	this.Fool.setTransform(250,250);
  	this.Fool.keyW = this.Fool.keyS = this.Fool.keyA = this.Fool.keyD = this.Fool.keyLt = this.Fool.keyUp = this.Fool.keyRt = this.Fool.keyDn = 0;

}).prototype = new createjs.MovieClip();

(lib.feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiwEZQhJh0AAilQAAikBJh0QBJh1BnAAQBoAABIB1QBKB0AACkQAAClhKB0QhIB1hoAAQhnAAhJh1g");

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

}).prototype = new createjs.MovieClip();

(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjvCjQhEgBgvgvQgwgwAAhDQAAhCAwgwQAvgvBEgBIHfAAQBEABAvAvQAwAwAABCQAABDgwAwQgvAvhEABg");
	this.shape.setTransform(25,0);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(1));

}).prototype = new createjs.MovieClip();

(lib.Fool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:1});

	// arrow
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AAAAvQgzAAgwAIIBjhtIBkBtQgwgIg0AAg");
	this.shape.setTransform(0,-59.7);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(14));

	// head
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCSQiTCTjPAAQjOAAiTiTg");

	this.timeline.addTween(createjs.Tween.get(this.shape_1).wait(14));

	// hand1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1).to({regX:25,rotation:-7.5,x:24.8,y:-3.2},0).wait(1).to({rotation:-15,x:24.2,y:-6.4},0).wait(1).to({rotation:-22.5,x:23.1,y:-9.5},0).wait(1).to({rotation:-30,x:21.7,y:-12.5},0).wait(1).to({rotation:-18,x:23.8,y:-7.7},0).wait(1).to({rotation:-6,x:24.9,y:-2.6},0).wait(1).to({rotation:6,y:2.6},0).wait(1).to({rotation:18,x:23.8,y:7.8},0).wait(1).to({rotation:30,x:21.7,y:12.5},0).wait(1).to({rotation:24,x:22.9,y:10.2},0).wait(1).to({rotation:18,x:23.8,y:7.8},0).wait(1).to({rotation:12,x:24.5,y:5.2},0).wait(1).to({rotation:6,x:24.9,y:2.6},0).wait(1));

	// hand2
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,180);

	this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(1).to({regX:25,rotation:172.5,x:-24.8,y:3.3},0).wait(1).to({rotation:165,x:-24.1,y:6.5},0).wait(1).to({rotation:157.5,x:-23.1,y:9.6},0).wait(1).to({rotation:150,x:-21.6,y:12.5},0).wait(1).to({rotation:162,x:-23.8,y:7.8},0).wait(1).to({rotation:174,x:-24.8,y:2.6},0).wait(1).to({rotation:186,y:-2.6},0).wait(1).to({rotation:198,x:-23.8,y:-7.7},0).wait(1).to({rotation:210,x:-21.6,y:-12.5},0).wait(1).to({rotation:204,x:-22.8,y:-10.1},0).wait(1).to({rotation:198,x:-23.8,y:-7.7},0).wait(1).to({rotation:192,x:-24.4,y:-5.2},0).wait(1).to({rotation:186,x:-24.8,y:-2.6},0).wait(1));

	// foot1
	this.instance_2 = new lib.feet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-0.7);

	this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(1).to({y:-5.7},0).wait(1).to({y:-10.7},0).wait(1).to({y:-15.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-4.7},0).wait(1).to({y:3.3},0).wait(1).to({y:11.3},0).wait(1).to({y:19.3},0).wait(1).to({y:15.3},0).wait(1).to({y:11.3},0).wait(1).to({y:7.3},0).wait(1).to({y:3.3},0).wait(1));

	// foot2
	this.instance_3 = new lib.feet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,-0.7);

	this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(1).to({y:4.3},0).wait(1).to({y:9.3},0).wait(1).to({y:14.3},0).wait(1).to({y:19.3},0).wait(1).to({y:11.3},0).wait(1).to({y:3.3},0).wait(1).to({y:-4.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-16.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-4.7},0).wait(1));

	this.stop();
	
}).prototype = new createjs.MovieClip();

var MouseDown = e =>{
    //log(e.which);
    if(e.which==1){
       //exportRoot.mouseImg.left.filters = [ new createjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.left.cache(-50,0,50,50);
    }else if(e.which==2){
       //exportRoot.mouseImg.mid.filters = [ new createjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.mid.cache(-5,0,10,50);
    }else if(e.which==3){
       //exportRoot.mouseImg.right.filters = [ new createjs.ColorFilter(1,1,1,1, 255,0,255,0) ];
       //exportRoot.mouseImg.right.cache(0,0,50,50);
    };
}

var MouseUp = e =>{
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

var MouseMove = e =>{
    game.target.x = e.clientX;
    game.target.y = e.clientY;
  	facing();
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
			exportRoot.Fool.keyLt = -2;
			break;
    	case 38:
			exportRoot.Fool.keyUp = 2;
			break;
    	case 39:
			exportRoot.Fool.keyRt = 2;
			break;
    	case 40:
			exportRoot.Fool.keyDn = -2;
			break;
		case 87:
			exportRoot.Fool.keyW = 2;
			break;
    	case 83:
			exportRoot.Fool.keyS = -2;
			break;
    	case 65:
			exportRoot.Fool.keyA = -2;
			break;
    	case 68:
			exportRoot.Fool.keyD = 2;
			break;
		default:
			break;
	}
}

var keyUp = e =>{
    switch( e.keyCode ){
    	case 37:
			exportRoot.Fool.keyLt = 0;
			break;
    	case 38:
			exportRoot.Fool.keyUp = 0;
			break;
    	case 39:
			exportRoot.Fool.keyRt = 0;
			break;
    	case 40:
			exportRoot.Fool.keyDn = 0;
			break;
		case 87:
			exportRoot.Fool.keyW = 0;
			break;
    	case 83:
			exportRoot.Fool.keyS = 0;
			break;
    	case 65:
			exportRoot.Fool.keyA = 0;
			break;
    	case 68:
			exportRoot.Fool.keyD = 0;
			break;
		default:
			break;
	}
}

const walking = e =>{
  	let p = exportRoot.Fool,
  		Fspeed = ( p.keyW || p.keyUp ) + ( p.keyS || p.keyDn ),
      	Rspeed = ( p.keyA || p.keyLt ) + ( p.keyD || p.keyRt),
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

const resizeCanvas = e =>{

	h = window.innerHeight,
	w = window.innerWidth,
	r = window.devicePixelRatio;

	canvas.style.width = w + "px";
	canvas.style.height = h + "px";

	canvas.width = w;
	canvas.height = h;

	if(null!=stage && null!=canvas){
		var ctx = canvas.getContext("2d");
		stage.clear();
		stage.draw(ctx, false);
	}
}