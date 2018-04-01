(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.solar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AMiruQCEDfAAEWQAAEWiEDfQhABthhBhQklElmdAAQmeAAklklQhhhhhAhtINkn1");
	this.shape.setTransform(0,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AsEHJQhghghBhuINknzINjn2QCEDgAAEWQAAEUiEDgQhBBthgBgQklEmmdAAQmeAAklkmg");
	this.shape_1.setTransform(0,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(5,1,1).p("AMiruQCEDfAAEWQAAEWiEDfQhABthhBhQklElmdAAQmeAAklklQhhhhhAhtINkn1");
	this.shape_2.setTransform(0,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFCC").s().p("AsEHJQhghghBhuINknzINjn2QCEDgAAEWQAAEUiEDgQhBBthgBgQklEmmdAAQmeAAklkmg");
	this.shape_3.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-51.5,191.8,155.1);


(lib.solar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AhBD5Itkn0QBAhtBhhhQElklGeAAQGdAAElElQBhBhBABtQCEDfAAEVQAAEWiDDg");
	this.shape.setTransform(6,-25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AsELDQhghghBhuINkn1Itkn0QBBhuBghgQElklGeAAQGdAAElElQBgBgBBBuQCEDfAAEVQAAEWiEDfIAAAAQhBBthgBhQklElmdAAQmeAAklklg");
	this.shape_1.setTransform(6,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(5,1,1).p("AhBD5Itkn0QBAhtBhhhQElklGeAAQGdAAElElQBhBhBABtQCEDfAAEVQAAEWiDDg");
	this.shape_2.setTransform(6,-25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFCC").s().p("AsELDQhghghBhuINkn1Itkn0QBBhuBghgQElklGeAAQGdAAElElQBgBgBBBuQCEDfAAEVQAAEWiEDfIAAAAQhBBthgBhQklElmdAAQmeAAklklg");
	this.shape_3.setTransform(6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-103.5,191.8,202.5);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjvCjQhEgBgvgvQgwgwAAhDQAAhCAwgwQAvgvBEgBIHfAAQBEABAvAvQAwAwAABCQAABDgwAwQgvAvhEABg");
	this.shape.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-15.2,-16.2,80.6,32.5), null);


(lib.feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiwEZQhJh0AAilQAAikBJh0QBJh1BnAAQBoAABIB1QBKB0AACkQAAClhKB0QhIB1hoAAQhnAAhJh1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.feet, new cjs.Rectangle(-25,-39.7,50,79.5), null);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiEwQhDgPgxhHQg+hZgBh9IAAgEQAAh/A/haQAxhIBDgOQARgEARAAIAAE3IDWAAQgBB9g+BZQg+BahZAAQgRAAgRgEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhqCcIAAk3QBZAAA9BaQA/BZAACAIAAAEg");
	this.shape_1.setTransform(10.7,-15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AiJD/ICOjqICyDqAi2jgIC7D1ICokT");
	this.shape_2.setTransform(-1,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-30.8,42.8,61.6);


(lib.solar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance = new lib.eye();
	this.instance.parent = this;
	this.instance.setTransform(30.5,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 圖層_1
	this.solar1 = new lib.solar1();
	this.solar1.name = "solar1";
	this.solar1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.solar1).wait(1).to({regY:26,rotation:3.3,x:-1.5,y:25.9},0).wait(1).to({rotation:6.7,x:-3,y:25.8},0).wait(1).to({rotation:10,x:-4.5,y:25.6},0).wait(1).to({rotation:13.3,x:-6,y:25.3},0).wait(1).to({rotation:16.7,x:-7.4,y:24.9},0).wait(1).to({rotation:20,x:-8.9,y:24.4},0).wait(1).to({rotation:23.3,x:-10.3,y:23.8},0).wait(1).to({rotation:26.7,x:-11.6,y:23.2},0).wait(1).to({rotation:30,x:-13,y:22.5},0).wait(1).to({rotation:27,x:-11.8,y:23.1},0).wait(1).to({rotation:24,x:-10.5,y:23.7},0).wait(1).to({rotation:21,x:-9.3,y:24.2},0).wait(1).to({rotation:18,x:-8,y:24.7},0).wait(1).to({rotation:15,x:-6.7,y:25.1},0).wait(1).to({rotation:12,x:-5.4,y:25.4},0).wait(1).to({rotation:9,x:-4,y:25.7},0).wait(1).to({rotation:6,x:-2.7,y:25.8},0).wait(1).to({rotation:3,x:-1.3,y:25.9},0).wait(1).to({rotation:0,x:0,y:26},0).wait(1));

	// 圖層_3
	this.solar2 = new lib.solar2();
	this.solar2.name = "solar2";
	this.solar2.parent = this;
	this.solar2.setTransform(-6,-1);

	this.timeline.addTween(cjs.Tween.get(this.solar2).wait(1).to({regX:6,regY:-2.3,rotation:-3.3,x:-0.1,y:-3.6},0).wait(1).to({rotation:-6.7,x:-0.3,y:-4},0).wait(1).to({rotation:-10,x:-0.5,y:-4.3},0).wait(1).to({rotation:-13.3,x:-0.7,y:-4.6},0).wait(1).to({rotation:-16.7,x:-0.9,y:-4.9},0).wait(1).to({rotation:-20,x:-1.1,y:-5.2},0).wait(1).to({rotation:-23.3,x:-1.4,y:-5.5},0).wait(1).to({rotation:-26.7,x:-1.7,y:-5.7},0).wait(1).to({rotation:-30,x:-1.9,y:-6},0).wait(1).to({rotation:-27,x:-1.7,y:-5.7},0).wait(1).to({rotation:-24,x:-1.4,y:-5.5},0).wait(1).to({rotation:-21,x:-1.2,y:-5.3},0).wait(1).to({rotation:-18,x:-1,y:-5},0).wait(1).to({rotation:-15,x:-0.8,y:-4.7},0).wait(1).to({rotation:-12,x:-0.6,y:-4.5},0).wait(1).to({rotation:-9,x:-0.4,y:-4.2},0).wait(1).to({rotation:-6,x:-0.3,y:-3.9},0).wait(1).to({rotation:-3,x:-0.1,y:-3.6},0).wait(1).to({rotation:0,x:0,y:-3.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-104.5,191.8,208);


(lib.Fool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:1});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AAAAvQgzAAgwAIIBjhtIBkBtQgwgIg0AAg");
	this.shape.setTransform(0,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));

	// head
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCSQiTCTjPAAQjOAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14));

	// hand1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25,rotation:-7.5,x:24.8,y:-3.2},0).wait(1).to({rotation:-15,x:24.2,y:-6.4},0).wait(1).to({rotation:-22.5,x:23.1,y:-9.5},0).wait(1).to({rotation:-30,x:21.7,y:-12.5},0).wait(1).to({rotation:-18,x:23.8,y:-7.7},0).wait(1).to({rotation:-6,x:24.9,y:-2.6},0).wait(1).to({rotation:6,y:2.6},0).wait(1).to({rotation:18,x:23.8,y:7.8},0).wait(1).to({rotation:30,x:21.7,y:12.5},0).wait(1).to({rotation:24,x:22.9,y:10.2},0).wait(1).to({rotation:18,x:23.8,y:7.8},0).wait(1).to({rotation:12,x:24.5,y:5.2},0).wait(1).to({rotation:6,x:24.9,y:2.6},0).wait(1));

	// hand2
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:25,rotation:172.5,x:-24.8,y:3.3},0).wait(1).to({rotation:165,x:-24.1,y:6.5},0).wait(1).to({rotation:157.5,x:-23.1,y:9.6},0).wait(1).to({rotation:150,x:-21.6,y:12.5},0).wait(1).to({rotation:162,x:-23.8,y:7.8},0).wait(1).to({rotation:174,x:-24.8,y:2.6},0).wait(1).to({rotation:186,y:-2.6},0).wait(1).to({rotation:198,x:-23.8,y:-7.7},0).wait(1).to({rotation:210,x:-21.6,y:-12.5},0).wait(1).to({rotation:204,x:-22.8,y:-10.1},0).wait(1).to({rotation:198,x:-23.8,y:-7.7},0).wait(1).to({rotation:192,x:-24.4,y:-5.2},0).wait(1).to({rotation:186,x:-24.8,y:-2.6},0).wait(1));

	// foot1
	this.instance_2 = new lib.feet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-5.7},0).wait(1).to({y:-10.7},0).wait(1).to({y:-15.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-4.7},0).wait(1).to({y:3.3},0).wait(1).to({y:11.3},0).wait(1).to({y:19.3},0).wait(1).to({y:15.3},0).wait(1).to({y:11.3},0).wait(1).to({y:7.3},0).wait(1).to({y:3.3},0).wait(1));

	// foot2
	this.instance_3 = new lib.feet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:4.3},0).wait(1).to({y:9.3},0).wait(1).to({y:14.3},0).wait(1).to({y:19.3},0).wait(1).to({y:11.3},0).wait(1).to({y:3.3},0).wait(1).to({y:-4.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-16.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-4.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,-65.2,130.6,115.2);


// stage content:
(lib.AprilFools = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.solar();
	this.instance.parent = this;
	this.instance.setTransform(106.6,100);

	this.instance_1 = new lib.Fool();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.6,343.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.7,195.5,242.2,397.9);
// library properties:
lib.properties = {
	id: '024AEC28BFED9A4C80BCE79D6B4A5A3B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['024AEC28BFED9A4C80BCE79D6B4A5A3B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;