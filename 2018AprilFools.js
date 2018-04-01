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
			LehmTarget: { x: 0 ,y: 0 },
			LehmSpeed: 0.5,
			foolSpeed: 2,
			solarAtr: 1,
		 	throw: false,
		 	throwSpeed: 60,
		 	keys: {keyW: 0, keyS: 0, keyA: 0, keyD: 0, keyLt: 0, keyUp: 0, keyRt: 0, keyDn: 0, TouchF: 0},
		 	babies: [],
		 	Gods: [],
		 	babySpeed: 1.5,
		 	lastDown: (new Date()).getTime(),
		 	lastGod: (new Date()).getTime(),
		 	lastLehm: (new Date()).getTime(),
		 	GodGenTime: 3,
		 	GodDestroyNum: 0
		 	};

	exportRoot.Lehm.x = window.innerWidth/2;
	exportRoot.Lehm.y = window.innerHeight/2;
	exportRoot.Lehm.LehmHead.cache(-45,-65,90,130);

	checkData();

	AddCactus(10);
  
    canvas.addEventListener('contextmenu', function(e){e.preventDefault();});
  
    canvas.addEventListener('mousedown', MouseDown);
    //canvas.addEventListener('mouseup', MouseUp);
    canvas.addEventListener('mousemove', MouseMove);

	canvas.addEventListener('touchstart', TouchStart);
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
       Swish(1);
    }else if(e.which==2){
       Swish(2);
    }else if(e.which==3){
       Swish(3);
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
	e.preventDefault();
	game.target.x = e.changedTouches["0"].clientX;
	game.target.y = e.changedTouches["0"].clientY;
	game.keys.TouchF = game.foolSpeed;
	game.lastDown = (new Date()).getTime();
}

const TouchMove = e =>{
	e.preventDefault();
	game.target.x = e.changedTouches["0"].clientX;
	game.target.y = e.changedTouches["0"].clientY;
	game.keys.TouchF = game.foolSpeed;
	//game.lastDown = (new Date()).getTime();
}

const TouchEnd = e =>{
	e.preventDefault();
	game.keys.TouchF = 0;
	if( (new Date()).getTime() - game.lastDown < 200)Swish(2);
}

const Swish = h =>{
	switch( h ){
    	case 1:
    		if(exportRoot.Fool.hand1.currentLabel != 'swish')exportRoot.Fool.hand1.gotoAndPlay('swish');
    		break;
    	case 2:
    		if(exportRoot.Fool.hand1.currentLabel != 'swish')exportRoot.Fool.hand1.gotoAndPlay('swish');
    		if(exportRoot.Fool.hand2.currentLabel != 'swish')exportRoot.Fool.hand2.gotoAndPlay('swish');
    		break;
    	case 3:
    		if(exportRoot.Fool.hand2.currentLabel != 'swish')exportRoot.Fool.hand2.gotoAndPlay('swish');
    		break;
    	default:
			break;
	}
}

const facing = () =>{
	let X = game.target.x - exportRoot.Fool.x,
      	Y = exportRoot.Fool.y - game.target.y,
      	R = Math.atan2( X, Y )*180/Math.PI;
    exportRoot.Fool.rotation = R;
}

var keyDown = e =>{
	let s = game.foolSpeed;
    switch( e.keyCode ){
    	case 37:
			game.keys.keyLt = -s;
			break;
    	case 38:
			game.keys.keyUp = s;
			break;
    	case 39:
			game.keys.keyRt = s;
			break;
    	case 40:
			game.keys.keyDn = -s;
			break;
		case 87:
			game.keys.keyW = s;
			break;
    	case 83:
			game.keys.keyS = -s;
			break;
    	case 65:
			game.keys.keyA = -s;
			break;
    	case 68:
			game.keys.keyD = s;
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
  	babiesChasing();
  	GodGen();
  	checkGod();
  	LehmWalking();
  	LehmFiring();
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
	    if(p.currentLabel=='walk')p.play();
	    else p.gotoAndPlay('walk');
	    facing();
  	}else{
    	p.gotoAndStop('stand');
  	}
}

const LehmWalking = ( p = exportRoot.Fool, l = exportRoot.Lehm, t = game.LehmTarget ) =>{
	let X = t.x - l.x,
		Y = t.y - l.y,
		R = game.LehmSpeed/Math.sqrt( X*X + Y*Y ),
		now = (new Date()).getTime();
	l.x += R*X;
	l.y += R*Y;
	if( now - game.lastLehm > 10000){
		game.lastLehm = now;
		t.x = p.x;
		t.y = p.y;
	}
}

const LehmFiring = ( p = exportRoot.Fool, l = exportRoot.Lehm ) =>{
	let now = (new Date()).getTime();
	if( now - game.lastLehm > 7000 ){
		l.LehmGun.gun_fire.visible = !0;
		l.LehmGun.rotation = l.LehmGun.rotation%360;
		let X = p.x - l.x,
			Y = l.y - p.y,
			R = l.LehmGun.rotation - Math.atan2( X, Y )*180/Math.PI,
			HitR = Math.atan( 50/Math.sqrt(X*X+Y*Y) )*180/Math.PI;
		if( ( R<180 && R>0 ) || R<-180  )l.LehmGun.rotation-=0.5;
		else l.LehmGun.rotation+=0.5;
		if( Math.abs(R)<HitR || Math.abs(R)>(360-HitR) )killed();
	}else{
		l.LehmGun.gun_fire.visible = !1;
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

const throwOut = () =>{
	solarStatus(1);
	game.throw = true;
}

const throwing = ( p = exportRoot.Fool ) =>{
	p.x -= game.throwSpeed;
	if(p.x<0){
		game.throw = !1;
		exportRoot.moon.visible = !0;
		solarStatus(0);
		MoonBabyGen();
	}
}

const MoonBabyGen = ( r = exportRoot, g = game ) =>{
	let b = new lib.moon();
	g.babies.push(b);
	b.x = 0;
	b.y = window.innerHeight;
	b.scaleX = b.scaleY = 0.5;
	r.addChild(b);
	b.cache(-110,-110,220,220);
}

const GodGen = ( g = game ) =>{
	let now = (new Date()).getTime();
	if(now - g.lastGod >= game.GodGenTime*1000){
		g.lastGod = now;
		let ng = new lib.God();
		game.Gods.push(ng);
		ng.x = Math.random()*window.innerWidth;
		ng.y = Math.random()*window.innerHeight;
		ng.cache(-60,-60,120,120);
		exportRoot.addChild(ng);
	}
}

const checkGod = ( g = game.Gods, p = exportRoot.Fool ) =>{
	for(let i=0;i<g.length;i++){
		if(g[i].currentLabel=='stand'){
			let X = g[i].x - p.x,
			Y = p.y - g[i].y,
			R = Math.sqrt( X*X + Y*Y ),
			d;
		
			if( R<200 && p.hand1.currentLabel=='swish'){
				//log( p.rotation - Math.atan2( X, Y )*180/Math.PI );
				d = p.rotation - Math.atan2( X, Y )*180/Math.PI;
				if( d<-270 || ( d>0 && d<90 ) ){
					g[i].uncache();
					g[i].play();
				}
			}
			if( R<200 && p.hand2.currentLabel=='swish'){
				//log( p.rotation - Math.atan2( X, Y )*180/Math.PI );
				d = Math.atan2( X, Y )*180/Math.PI - p.rotation;
				if( d<-270 || ( d>0 && d<90 ) ){
					g[i].uncache();
					g[i].play();
				}
			}
		}else if(g[i].currentLabel=='dead'){
			exportRoot.removeChild(g[i]);
			updateGod(1);
			g.splice(i,1);
		}
		
	}
}

const babiesChasing = ( p = exportRoot.Fool, bs = game.babies, s = game.babySpeed ) =>{
	for(let i=0;i<bs.length;i++){
		let X = p.x - bs[i].x,
			Y = p.y - bs[i].y,
			R = s/Math.sqrt( X*X + Y*Y );
		bs[i].x += R*X;
		bs[i].y += R*Y;
		if(R>0.03){
			bs[i].x = window.innerWidth;
			bs[i].y = window.innerHeight;
			killed();
		}
	}
}

const killed = ( p = exportRoot.Fool ) =>{
	let c = new lib.corpse();
	c.x = p.x;
	c.y = p.y;
	c.rotation = p.rotation;
	exportRoot.empty.addChild(c);
	p.x = p.y = 0;
	game.throw = !1;
	game.lastLehm += 10000;
	solarStatus(0);
}

const solarStatus = ( f=0, s=exportRoot.solar ) =>{
	s.solar1.gotoAndStop(f);
	s.solar2.gotoAndStop(f);
	s.eye.gotoAndStop(f);
}

const AddCactus = (n=1) =>{
	while(n--){
		let c = new lib.cactus();
		c.x = Math.random()*window.innerWidth;
		c.y = Math.random()*window.innerHeight;
		c.cache(-50,-50,100,100);
		exportRoot.empty.addChild(c);
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

const checkData = () =>{
	if (!window.localStorage["visited"]) {
		window.localStorage["visited"] = true;
		SaveData(); //存檔
	} else {
		LoadData(); //讀檔
	}
}

const SaveData = () => {	
	let obj = {}; //存檔物件
	obj.GodDestroyNum = game.GodDestroyNum;
	window.localStorage["data"] = JSON.stringify(obj);
}
		
const LoadData = () => {
	let Obj = JSON.parse(window.localStorage["data"]);
	if (Obj.GodDestroyNum)game.GodDestroyNum = Obj.GodDestroyNum;
	updateGod();
}

const updateGod = (x=0) =>{
	game.GodDestroyNum += x;
	exportRoot.GodDestroyText.text = game.GodDestroyNum;
	SaveData(); //存檔
}