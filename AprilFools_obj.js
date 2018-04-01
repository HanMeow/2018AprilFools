(lib.root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.addChild(this.empty = new cjs.MovieClip());
	this.empty.parent = this;

	this.addChild(this.Fool = new lib.Fool());
	this.Fool.parent = this;
	this.Fool.setTransform(250,250);

	this.addChild(this.Lehm = new lib.Lehm());
	this.Lehm.parent = this;
	this.Lehm.LehmGun.gun_fire.scaleY = 50;

	this.addChild( this.GodDestroyText = new cjs.Text("0", "50px 'NI7SEG'", "#00CC00") );
	this.GodDestroyText.name = "GodDestroyText";
	this.GodDestroyText.lineHeight = 50;
	this.GodDestroyText.lineWidth = 200;
	this.GodDestroyText.parent = this;
	this.GodDestroyText.setTransform(80,0);

	this.addChild(this.solar = new lib.solar() );
	this.solar.parent = this;

	this.addChild(this.moon = new lib.moon() );
	this.solar.parent = this;
	this.moon.visible = false;

}).prototype = new cjs.MovieClip();

(lib.feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiwEZQhJh0AAilQAAikBJh0QBJh1BnAAQBoAABIB1QBKB0AACkQAAClhKB0QhIB1hoAAQhnAAhJh1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = new cjs.MovieClip();

(lib.hand_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjvCjQhEgBgvgvQgwgwAAhDQAAhCAwgwQAvgvBEgBIHfAAQBEABAvAvQAwAwAABCQAABDgwAwQgvAvhEABg");
	this.shape.setTransform(24.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = new cjs.MovieClip();

(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,swish:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// hand
	this.instance = new lib.hand_();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.7,x:25},0).wait(1).to({rotation:19.2,x:27.4,y:14.9},0).wait(1).to({rotation:38.4,x:27.2,y:28.4},0).wait(1).to({rotation:57.6,x:24.8,y:40.1},0).wait(1).to({rotation:76.8,x:20.9,y:49.6},0).wait(1).to({rotation:57.6,x:24.8,y:40.1},0).wait(1).to({rotation:38.4,x:27.2,y:28.4},0).wait(1).to({rotation:19.2,x:27.4,y:14.9},0).wait(1).to({rotation:0,x:25,y:0.5},0).wait(1));

	// saber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADE3FF").s().p("AnnAHIJYiUQETBOBkDNg");
	this.shape.setTransform(75.3,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADE3FF").s().p("Ao7jUQLoBvBlj6QG4FfjTFgg");
	this.shape_1.setTransform(76.2,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADE3FF").s().p("AqDm8QL+FkE0mHQG2LSnPDtg");
	this.shape_2.setTransform(70.9,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADE3FF").s().p("ABLJYIrPyvQO0LfFVmQQgUNgogAAIgGAAg");
	this.shape_3.setTransform(70.5,71.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADE3FF").s().p("AlOKKIkO0YQJGLiJzjkQmyMfm5AAQggAAgggFg");
	this.shape_4.setTransform(71.5,101.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADE3FF").s().p("AlBD6IhvqRQGOHxHTAPQkOEvjSAAQiZAAh5ieg");
	this.shape_5.setTransform(64.3,118.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADE3FF").s().p("AknkZQCBGdHOA+QihBYh2AAQkoAAgQozg");
	this.shape_6.setTransform(54.5,132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(2));

}).prototype = new cjs.MovieClip();

(lib.Fool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stand":0,walk:1});

	// timeline functions:
	this.frame_15 = function() {
		this.gotoAndPlay('walk');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("AAAAvQgzAAgwAIIBjhtIBkBtQgwgIg0AAg");
	this.shape.setTransform(0,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// head
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCSQiTCTjPAAQjOAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(16));

	// hand1
	this.hand1 = new lib.hand();
	this.hand1.name = "hand1";
	this.hand1.parent = this;
	this.hand1.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.hand1).wait(1).to({regX:30.5,regY:33.1,x:-30.5,y:-33.1},0).wait(1).to({rotation:172.5,x:-34.5,y:-28.8},0).wait(1).to({rotation:165,x:-38,y:-24},0).wait(1).to({rotation:157.5,x:-40.8,y:-18.9},0).wait(1).to({rotation:150,x:-42.9,y:-13.4},0).wait(1).to({rotation:162,x:-39.2,y:-22.1},0).wait(1).to({rotation:174,x:-33.8,y:-29.7},0).wait(1).to({rotation:186,x:-26.9,y:-36.1},0).wait(1).to({rotation:198,x:-18.7,y:-40.9},0).wait(1).to({rotation:210,x:-9.8,y:-43.9},0).wait(1).to({rotation:204,x:-14.4,y:-42.6},0).wait(1).to({rotation:198,x:-18.7,y:-40.9},0).wait(1).to({rotation:192,x:-22.9,y:-38.7},0).wait(1).to({rotation:186,x:-26.9,y:-36.1},0).wait(1).to({rotation:180,x:-30.5,y:-33.1},0).wait(1));

	// hand2
	this.hand2 = new lib.hand();
	this.hand2.name = "hand2";
	this.hand2.parent = this;
	this.hand2.setTransform(0,0,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.hand2).wait(1).to({regX:30.5,regY:33.1,x:30.5,y:-33.1},0).wait(1).to({skewX:172.5,skewY:-7.5,x:26,y:-36.8},0).wait(1).to({skewX:165,skewY:-15,x:20.9,y:-39.8},0).wait(1).to({skewX:157.5,skewY:-22.5,x:15.6,y:-42.2},0).wait(1).to({skewX:150,skewY:-30,x:9.9,y:-43.9},0).wait(1).to({skewX:162,skewY:-18,x:18.8,y:-40.9},0).wait(1).to({skewX:174,skewY:-6,x:26.9,y:-36.1},0).wait(1).to({skewX:186,skewY:6,x:33.8,y:-29.7},0).wait(1).to({skewX:198,skewY:18,x:39.3,y:-22.1},0).wait(1).to({skewX:210,skewY:30,x:43,y:-13.4},0).wait(1).to({skewX:204,skewY:24,x:41.3,y:-17.8},0).wait(1).to({skewX:198,skewY:18,x:39.3,y:-22.1},0).wait(1).to({skewX:192,skewY:12,x:36.8,y:-26},0).wait(1).to({skewX:186,skewY:6,x:33.8,y:-29.7},0).wait(1).to({skewX:180,skewY:0,x:30.5,y:-33.1},0).wait(1));

	// foot1
	this.foot1 = new lib.feet();
	this.foot1.name = "foot1";
	this.foot1.parent = this;
	this.foot1.setTransform(-21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.foot1).wait(2).to({y:-5.7},0).wait(1).to({y:-10.7},0).wait(1).to({y:-15.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-4.7},0).wait(1).to({y:3.3},0).wait(1).to({y:11.3},0).wait(1).to({y:19.3},0).wait(1).to({y:15.3},0).wait(1).to({y:11.3},0).wait(1).to({y:7.3},0).wait(1).to({y:3.3},0).wait(1).to({y:-0.7},0).wait(1));

	// foot2
	this.foot2 = new lib.feet();
	this.foot2.name = "foot2";
	this.foot2.parent = this;
	this.foot2.setTransform(21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.foot2).wait(2).to({y:4.3},0).wait(1).to({y:9.3},0).wait(1).to({y:14.3},0).wait(1).to({y:19.3},0).wait(1).to({y:11.3},0).wait(1).to({y:3.3},0).wait(1).to({y:-4.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-20.7},0).wait(1).to({y:-16.7},0).wait(1).to({y:-12.7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-4.7},0).wait(1).to({y:-0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();

(lib.solar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

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

}).prototype = new cjs.MovieClip();

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

}).prototype = new cjs.MovieClip();

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

}).prototype = new cjs.MovieClip();

(lib.solar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.eye = new lib.eye();
	this.eye.parent = this;
	this.eye.setTransform(30.5,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.eye).wait(20));

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

}).prototype = new cjs.MovieClip();

(lib.moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AjUBdQgogEgcgMIABAAQAGgBAFgFQAFgFgBgGQgBgGgHgGIgMgJQgGgHgCgLQAEACAGAAQAAAKAJAIQAIAHAKgBIAIgCQAAAGAEAGQAEAHAHAEQALAFAUAAIAeABQAVAAAKgDQAJgCAOgIIAOgHQgWAWgNAIQgJAGgBAEIgBADIg/gEgADuBWIgMAAIgBgFIgBgCIAEgEQAFgFADgKQAOADAJAAIgDAGQgEAKABAIgAEIAQIgJgOQgHgNAGgdQAHghgDgMQgCgGgDgEIAlgBIADABIAAAxQAAAhgHAUIgIAVIgKADQABgGgFgJgAhSATIgOgFIgFgGIgEgGQgFgFgIgCQgIgDgIADQgEgPgRgGQAIgHABgJQAAgGgDgEIAdgIIAbgJIAEAPIAIAcQAHAagGAUIgCgBg");
	this.shape.setTransform(-51.8,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("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AAAAgBQAAAAAAgBQABAAAAgBQABgDADgBQAagTAWgKIADgIQgQACgPgEQgHgBgBgEQgCgFAGgDQADgBAGAAQAQgBAQgDIARg2QAEgMAGAAQAGAAABAHQABAEgCAHIgOArIAJgCIAJgWQALgbACgOQABgMAEgDQAEgCAEACQAGADAAANQAAAUgCAOIAHgJIAMgbQADgHADgCIACgDQADgFAHgDQAHgCAEAEQAFAFgCAMQgEAegLAfQgGANgGAOIAJACQAIAEACAFQACAFgDAGQgCAFgGADIgBAAQAAARACAfQACAigBAPQgBA7gaAiIAFAAQADAAACACQADACgBAEQgBADgDADQgJAGgRADIgDABQAKAUAFAOQADAIAAAFQAAAIgGADQgGAAgBgKgAFCijIgEADIABADIABAEIAMABIAPABQgBgJAEgJIADgGQgKAAgNgDQgDAKgFAFgAFblPQADAFACAGQADAMgHAhQgGAdAHAOIAJAOQAFAJgBAGIAKgEIAIgUQAHgVAAghIAAgyIgDAAIgMAAIgZAAgAFHlyIgKADIgCAEIAJgCIAEgBIAAgFIgBABgAFjlwIAAgBIAAgBIgCACIACAAIAAAAgAAchOQgEgBgFgEIgWgRQgLgGgCgGQgCgGAEgGQADgFAGgBQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAQAIAUAQQAKAIABAHQACAHgGAFQgEAEgFAAIgEgBg");
	this.shape_1.setTransform(-61.2,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ALDLDQkkElmfAAQmdAAkmklQkkklAAmeQAAmeEkklQEmkkGdAAQFzAAERDpQhfghhtAAQj4AAiwCvQivCwAAD5QAAD3CvCwQCwCwD4AAQD5AACviwQBchcAshvQgHGRkeEdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("ArCLDQklklAAmeQAAmdElklQElklGdAAQFyAAERDpQheghhtAAQj5AAiwCvQiuCwAAD5QAAD3CuCwQCwCwD5AAQD4AACwiwQBchcAshvQgHGQkeEeQkkElmfAAQmdAAklklg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = new cjs.MovieClip();

(lib.blood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ADTFWQgLgDgYgOQgWgNgOgDQgXgGgwAMQgrALgZgCQgogDgVgaIgLgPQgHgIgHgDQgNgGgTANQgcATgEACQgSAGgVgKQgSgJgNgSQgIgNgLgYQgMgagGgLQgVAKgagMQgXgLgPgWQgRgaABgfQACghAXgPQgOgFgtgBQglgBgRgOQgRgNgCgWQgCgXAMgRQAMgSAVgHQAVgHAWAEQgOgWALgbQALgcAZgHQgHgVAFgVQAFgXARgKQAPgJAUACQARABASAKQALAGATAPQAUAOAKAGQARAKASACQAUADAPgJQgSgXAGggQAGggAagOQAagPAeALQAfALALAbQAIhNAngQQATgIAnAGQApAGAQAJQAXANALAZQAMAZgFAaQAMgMAQgFQARgGAQACQARACANALQAOAKAFAQQAJAZgOAeQgLAVgYAbQASABAPAMQAPANAEASQAggFATAGQANAFAJAJQAKAKABANQABALgHAMQgHAKgMAFQgNAJgiAFQAOAIAWAFIAnAHQAWAFAPAKQATAMAEARQAEAUgOATQgOASgVAGQgSAFgYgDQgOgBgbgHQAgAQALAMQAKAJAEAMQAFANgCAMQgDAPgOALQgNAJgQACQgVADgpgLQAOAQAAAXQAAAXgOARQgNARgWAGQgLADgKAAQgLAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = new cjs.MovieClip();

(lib.corpse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCSQiTCTjPAAQjOAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// hand1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25,rotation:-3,x:26.7,y:-1.3},0).wait(1).to({rotation:-6,x:28.4,y:-2.6},0).wait(1).to({rotation:-9,x:30.1,y:-3.9},0).wait(1).to({rotation:-12,x:31.6,y:-5.2},0).wait(1).to({rotation:-15,x:33.1,y:-6.4},0).wait(1).to({rotation:-18,x:34.5,y:-7.7},0).wait(1).to({rotation:-21,x:35.9,y:-8.9},0).wait(1).to({rotation:-24,x:37.1,y:-10.1},0).wait(1).to({rotation:-27,x:38.4,y:-11.3},0).wait(1).to({rotation:-30,x:39.5,y:-12.5},0).wait(1).to({rotation:-33,x:40.6,y:-13.6},0).wait(1).to({rotation:-36,x:41.7,y:-14.7},0).wait(1).to({rotation:-38.9,x:42.7,y:-15.7},0).wait(1).to({rotation:-41.9,x:43.6,y:-16.7},0).wait(1));

	// hand2
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:25,rotation:181.1,x:-27.5,y:-0.4},0).wait(1).to({rotation:182.1,x:-30,y:-0.9},0).wait(1).to({rotation:183.2,x:-32.4,y:-1.4},0).wait(1).to({rotation:184.3,x:-34.9,y:-1.8},0).wait(1).to({rotation:185.4,x:-37.4,y:-2.3},0).wait(1).to({rotation:186.4,x:-39.8,y:-2.8},0).wait(1).to({rotation:187.5,x:-42.3,y:-3.2},0).wait(1).to({rotation:188.6,x:-44.7,y:-3.7},0).wait(1).to({rotation:189.6,x:-47.1,y:-4.2},0).wait(1).to({rotation:190.7,x:-49.5,y:-4.6},0).wait(1).to({rotation:191.8,x:-51.9,y:-5.1},0).wait(1).to({rotation:192.9,x:-54.3,y:-5.5},0).wait(1).to({rotation:193.9,x:-56.7,y:-6},0).wait(1).to({rotation:195,x:-59.1,y:-6.4},0).wait(1));

	// foot1
	this.instance_2 = new lib.feet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0.5,x:-21.4,y:2.5},0).wait(1).to({rotation:1,x:-21.7,y:5.7},0).wait(1).to({rotation:1.5,x:-22.1,y:8.9},0).wait(1).to({rotation:2.1,x:-22.4,y:12.2},0).wait(1).to({rotation:2.6,x:-22.8,y:15.4},0).wait(1).to({rotation:3.1,x:-23.1,y:18.6},0).wait(1).to({rotation:3.6,x:-23.5,y:21.8},0).wait(1).to({rotation:4.1,x:-23.9,y:25},0).wait(1).to({rotation:4.6,x:-24.2,y:28.2},0).wait(1).to({rotation:5.2,x:-24.6,y:31.4},0).wait(1).to({rotation:5.7,x:-24.9,y:34.7},0).wait(1).to({rotation:6.2,x:-25.3,y:37.9},0).wait(1).to({rotation:6.7,x:-25.6,y:41.1},0).wait(1).to({rotation:7.2,x:-26,y:44.3},0).wait(1));

	// foot2
	this.instance_3 = new lib.feet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-1.4,x:21.7,y:1.8},0).wait(1).to({rotation:-2.9,x:22.4,y:4.3},0).wait(1).to({rotation:-4.3,x:23.1,y:6.8},0).wait(1).to({rotation:-5.7,x:23.9,y:9.3},0).wait(1).to({rotation:-7.1,x:24.6,y:11.8},0).wait(1).to({rotation:-8.6,x:25.3,y:14.3},0).wait(1).to({rotation:-10,x:26,y:16.8},0).wait(1).to({rotation:-11.4,x:26.7,y:19.3},0).wait(1).to({rotation:-12.8,x:27.4,y:21.8},0).wait(1).to({rotation:-14.3,x:28.1,y:24.3},0).wait(1).to({rotation:-15.7,x:28.9,y:26.8},0).wait(1).to({rotation:-17.1,x:29.6,y:29.3},0).wait(1).to({rotation:-18.5,x:30.3,y:31.8},0).wait(1).to({rotation:-20,x:31,y:34.3},0).wait(1));

	// blood
	this.blood = new lib.blood();
	this.blood.name = "blood";
	this.blood.parent = this;
	this.blood.setTransform(-3.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.blood).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.45,scaleY:1.45},0).wait(1).to({scaleX:1.51,scaleY:1.51},0).wait(1).to({scaleX:1.57,scaleY:1.57},0).wait(1).to({scaleX:1.64,scaleY:1.64},0).wait(1).to({scaleX:1.7,scaleY:1.7},0).wait(1).to({scaleX:1.77,scaleY:1.77},0).wait(1).to({scaleX:1.83,scaleY:1.83},0).wait(1).to({scaleX:1.89,scaleY:1.89},0).wait(1));

}).prototype = new cjs.MovieClip();

(lib.God = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,dying:1,dead:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("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");
	this.shape_2.setTransform(4.7,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(4.7,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(4.6,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("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AFAhQAEAZAAAkIABATIAAAEgAISmwIACAFIACAFQABADADACIAFAEQAEADAEAFIAHAKQAEAEAGAEIALAIIAQALQACgzAJgwIAGgeIADgRIABgOQABgkgNgYIgJgOQgGgJgCgHQgDgKAEgfQAEgagJgMQgFgIgLgEIgVgHIgkgIIgCAAIAEADIAVANQAKAJAHAIQAHAJAGANIAIAYIAHAWQADAMABALQABAagOAkIgLAYQgTAkgcAlIgEAFIACAEIAAABQADgEAGgBIADAAQAGAAADAEgAGzsGIgKADIgBABQAgAPAfASIgBgBIgIgLQgIgMgLgHQgKgGgKAAIgEAAgAlskuIgWgDQgNgDgJgFQgMgHgEgKQgCgFAAgHQAAgKAEgMIACgHQACgDAHgEQAIgGAFgBIAGgCIAFgBIAHgFQAEgBAIAAIANAAIANAFIAIAEIAHBTIgKACIgEAAIgXgCgAFXnaIAFACQAKAGAIAIQALAKADALQABAFAAALQAAAIgCAEQgCADgEADQgLAIgNADgAnhoPQgDgDgBgEIgBgEIAAgEIgBgJQAAgEADgEQACgDAFgCQAFgDAMABQAGAAADACQADAEAAAHQABANgDAIQgCAEgEAEQgEAEgFAAIgCAAQgIAAgGgHgAHGpPQgIgCgDgCQgEgDAAgHIABgLQACgMAFgEQADgCAEAAIAIAAIAHAAQAFAAADACQAGAEAAAMQAAAJgCAGQgEAHgGADQgEABgEAAIgJgBg");
	this.shape_5.setTransform(4.6,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

}).prototype = new cjs.MovieClip();

(lib.cactus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(3,1,1).p("AkiAAIDPAAIDDAAICzAA");
	this.shape.setTransform(0,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#009900").ss(3,1,1).p("AhTBaIAAl+QAAgoAcgdQAdgcAnAAQApAAAdAcQAcAdAAAoIAAEfIAmAAIAAiwQAAgaARgSQARgRAaAAQAZAAASARQARASABAYIAADvQAAADAAADQgDAUgPAPQgSASgZAAIhiAAIAAETAhTDTIh9AAQgZAAgSgSQgPgPgCgUQgBgDAAgDIAAlPQABgYARgSQASgRAZAAQAZAAASARQASASAAAaIAAEPIBAAAAhTGGIAAizIAAh5");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666600").s().p("AhTGGIAAizIAAh5IAAl+QAAgoAdgdQAdgcAnAAQAoAAAcAcQAdAdAAAoIAAEfIAmAAIAAiwQAAgaARgSQARgRAaAAQAZAAASARQARASABAYIAADvIAAAGQgDAUgPAPQgSASgZAAIhiAAIAAETgAjPDTQgaAAgSgSQgPgPgCgUIgBgGIAAlPQABgYARgSQASgRAaAAQAZAAARARQASASAAAaIAAEPIBAAAIAAB5g");
	this.shape_2.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = new cjs.MovieClip();

(lib.LehmHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AE0E9QgEAZgKAfQgWBBgoA6QgnA5g2AsQgaAWgVAIQgVAIgfAAQgogBgtgPQgkgNgsgYQghgSgVgQQgbgVgRgXQgNgUgRgpIguhtQgIgUgFgPQghgNgSgWQgNgPgKgeQgWg6gJg7QgEgbgCgbQgEgpABgkQAAgMAFgGQAEgFAIAAQAFgBAEACIAAAAQAFgrgCgZQgCglgQgZQgMgPgEgJQgGgPAGgMQAFgGAHgBQAIgBAFAFQgBgQgLgVQgQgfgBgFQgEgLADgHQABgFAEgCQAFgDAEACIAAhMQAAgNAFgEQAEgDAEABQAFAAADADQAFAEAFAKQgBgVAHgJQAEgGAJgBQAIgBAEAGQABABADAJQACAHAEAAQAJgwAag2QAGgMAEgEQAEgDAFgBQAEAAAFACQAGADABANQABAPADAFQAMgjAXgdQANgQAMACQAGACAEAIQADAGAAAIQAeghAkgbQASgNAKAGQAIAFgBAOQAAACgBAIQgBAHAAAEQAIgJAIgEQAKgFAHAFQAHAFABAQQAAAIAAAFQAHgNAMgJQAQgNATgFQAJgCAFADQAEACAAAEQABAEgDACQALAEARgKQASgKAKACQAHACADAIQAEAIgGAEIA8gZQAMgFAHACQAEACACAFQACAFgEADQAIgDAIAGQAIAHAAAJQAAAIgFAJQgDAFgHAKIBEgJQAHAAADAAQAGAAAEADQAHAFgBAPQgBATABAEQAMgIAIgEQAKgFAKABQAMABAGALQAGAMgIAHQAMgFAOAIQANAHABAOQAFABANgCQALgDAGAEQAGAEABAMQAAAWgLARQAGACAIgEQABgBALgHQAHgFAIgBQAIAAAEAGQAEAHgHALQgKAJgDAGQgDAFgBAJQAAAFgBAKQgBAQgIASQgFAMgLATQgKARgDAKQgDAKAAAYQAAAXgDAhIgLCLQAFgBAJAAQAQgBAEABQAJACAKAKQARAUACAqQAEA2gMAiQgDAKgHASQgFATAAABQgDAIgIAKQgJAKgEAFQgJAKgcAsQgUAggSAPQgBAMgCAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("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");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA287").s().p("AAhGnQgZgBgcgIQgVgHgfgNQgpgRgYgPQgjgVgVgZQgTgWgRgmIgchBIgQgeQgJgTgFgMIgDgJIAEgDQADgFAAgFQAAgGgIgFIgGgCIgIggIgWhsIAAAAQAHgDgBgOIgDgUQAIgEACgLQAAgHgEgNIgGgNIACgXQAFh8gLh5QAVgIAcgEQATgCAggBQCggGBOgCQCGgDBqADIAABDQAAAnAEAcQABAJAYBsQAHAhACAcQgIADgBARQgCAeABBGQAABBgEAjQgLBgg2BTQgUAegWAWQgMAOgcAZQgdAZgRAIQgTAJgaAAIgDAAgAhqCkIgQAHIgEADQgSAFgjADQgnACgSAHQgJADAAAFQABAGAIAAQgCAJADAKQAEANAKAKQAIAIAIABQALACAPgLQAPgLALgMIANgPQAIgJAHgEIACgBIABAAIAAAAIANgGIAHgEIACABQAGAEAKABIARABIBSgDIA/gBQANAAAFgFQADgDABgGQABgIgHgEQgEgDgKABIh5AEIgfACIgPAEIAAgCQgCgFgGAAIgDAAQgEAAgEABgABmArQgEACgBAEQgBAEABADIAEAHIAFAGIAHALQAFAHAEADIAGADQADACACACQADAEAAALIAABKQAAAJACADQADAIAHgCQAHgCAAgNIAAhNQAAgPgDgHQgDgEgFgFIgKgIQgKgIgHgLQgHgLgGAAIgCAAgAiIBGIgLAEQgUAMgIAJIgJALQgFAGAAAGQgBAGADANIAAAFIABAGIAEADQADACACgCQABgBACgEIACgOQABgKADgFQAEgIALgHIATgLQAFgEACgDQAEgFgDgFQgCgEgFAAIgDAAgAAUhrIgBAIIgBASQAAAQADAIIAGALIAIAKQAIALAEATIADAMIAEAHIADAHIABAHIgCAGIABAIQgBAFgCACIgEACIgFACQgEACgBAGQgBAFADAEQAEAEAHgBQAGAAAFgFQAKgHADgNQABgHgBgRQAAgIgCgDIgEgJQgDgEgEgKIgEgMQgCgHgDgFQgBgDgGgIIgKgNIgEgHIAAgJIAAgXQAAgGgBgCQgCgGgFAAQgEABgCAEgAhWg8IgCAFIgEAGIgCAJQAAAIgGATQgGAWgBAWQgBAQAFAHQAEAHALAFQAKADALAAQAIAAADgCQAHgEgBgGQgBgJgOgBIgKgCQgFgBgDgDQgEgFABgLQACgjAHgmQABgHgBgDQgCgCgCgBIgBAAIgEABgADniHQAEACAEABQAFAAADgCQAGgGgEgIQgCgEgIgGIgdgQIgKgGIgKgGQgGgEgMgDIgUgFIgNgGIgNgHIgPgFQgHgDgFgBIgUgBIgHABQgEABgBAEQgBAFAHACIgDAGIgHAQIgIAOIgFAQQgBAGACADQABACAFADQAJAEASAAIAYABIADAAQAGACAEgCIBkAAQAFABAEgBIABACgAkUioQgDAGABACQAAAFAFADIAJADQARACAhgBIBYgCIAegCQADACADABQAEACADgFQACgCgBgDIACgDQABgEgDgEQgDgDgEgBIgCAAQgRgdgJgKQgGgIgFgCQgGgCgLACIgiAGQgRACgJAEIgNAGIgNAEIgPAJIgHAEIgBgCQgNAHgJANgACPkJIAJAEIANABIANABQAHACAMAJIAQALQAHAGAGABQAFABAEgDQAEgDADgEQAEgLgIgIIgJgGIgJgGQAJgMgGgIQgEgHgQgBQgOgBgSgDQAAgFgEgFQgDgEgFgCQgHAAgDgCIgFgGQgGgEgLADQgMADgEgBQADgDAAgEQABgFgDgDQgEgIgKACIgJAFIgYARQgMAJgFAFQgIAKAAALQAAAGADAEQAEAGAFABQAFACAKgCIATgEQAHgBADACIAGAEQAGAFAOgBQAQAAAFACgAkhlOQgFADgBAHQAAAGAFAEQADADAJABQAZAEAUAKQgUACgSAIQgJADABAFQABABAAABQAAAAAAABQABAAAAABQAAAAABAAIABAEQABAFAFADQAGADANgCIASgEIAQgBICNAAQAKAAAEgDQAFgDAAgHQAAgHgGgDIgGgCIAAgBQgEgKgEgFIgMgIIgVgMQgMgGgHgDIgTgEIgRgHQgKgDgHACIgLAEIgQABQgLAAgFADIgHADIgGABIgnAAQgJAAgEACgAleA8QgHgKgKgYIgKgaQgFgMgEgRQgWhfAAhQQAAgHAEABQAKAIAKAMIgBABQgBANAIAQIAPAbIAGASIAHARQAEAHAEAFIABAFQgEARACAVQACARAGAiIADAlQACAXACANIAAABQgNgJgJgNgAE0AxIAAg/IACgBIgCiCQAAgHACgEQACgDADgBIgCgHIgBgEIAIgIQACAEAEACQAFADAHgCQAGgCAEgGQAFgIABgRIABgGQAHgCAOABQAKABAEACQAGAEAEAKQAGASACAfQACAagDAQQgCAPgLAjQgHAUgFAIQgCAFgNASIg6BPIgBACIAAgdg");
	this.shape_2.setTransform(0.5,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiuDoQgIgBgJgIQgKgKgDgNQgDgKABgJQgIAAAAgGQAAgFAJgDQASgHAmgCQAjgDASgFIAFgDIAAAXIAAABIgBAAIgCABQgHAEgIAJIgNAPQgMAMgPALQgMAJgKAAIgDAAgABoiyQgEAAgCgCQgCgCAAgDQAAgFADgGIAGgLIAGgNQADgHADgEQAKABANAGIAFADIgCAAQgFgBgDACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQgFALABAWIgBAGIgXAAgADNi+IgBgIQAGABADACIAIAHIAKAHIADABIgdABIAAgLgAjljEQABADADAAQADAAAGgEIAJgEIAKgGIAGgCQgBAFADAFQACAFAGAEIg0ADQABgFADgEgAhrjSQgCgKgEgDQgEgDgEgBIADgBQAIgDAGADIAGAFQAKAMAFAIIAFAIIgIABIgWABQACgGgBgLg");
	this.shape_3.setTransform(-2.5,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ACYDQQgBgEAAgIIAAhLQAAgKgEgEQgBgDgEgCIgFgDQgFgDgEgGIgIgLIgFgGIgDgHQgCgEACgEQABgEADgBQAIgCAHANQAIAKAJAJIAKAHQAGAFACAFQAEAGAAAQIgBBNQAAAMgHACIgCABQgFAAgDgGgAhrC1IAPgHQAGgDAFABQAHAAABAFIABACIAPgEIAfgBIB5gFQAJgBAFADQAGAFgBAIQAAAFgEAEQgEAEgOAAIg+ABIhTADIgRAAQgJgBgHgEIgBgBIgHADIgNAGgAioChIgDgEIgBgFIAAgGQgEgMABgHQABgFAEgHIAJgLQAIgIAUgMIALgFQAIgBADAGQADAEgEAGQgCADgGADIgTAMQgLAGgEAJQgCAFgBAJIgDAPQgBAEgCABIgCAAIgDAAgAA5BOQgEgEABgFQABgFAFgDIAEgBIAFgDQACgCAAgEIAAgIIABgHIAAgGIgDgIIgFgHIgDgNQgDgRgJgMIgHgKIgHgLQgDgIABgPIAAgSIABgIQADgFAEAAQAEAAACAFQABACAAAHIAAAWIABAJIAEAHIAJAOQAHAIABADQADAEACAHIADAMQAEAJAEAGIAEAIQABAEAAAHQABASgBAGQgCANgLAIQgFAFgFAAIgDAAQgGAAgCgEgAhKBLQgKgEgFgHQgFgIABgPQABgXAGgVQAGgTAAgIIACgKIAFgGIACgFQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQADABABADQABACgBAHQgGAngCAjQgBALAEAEQACADAGACIAJABQAOABABAJQABAGgGAEQgDACgJABQgKAAgLgEgAD+h7QgFAAgDgDIgCgCQgDACgFgBIhkgBQgFACgFgBIgDgBIgYAAQgSAAgJgEQgFgDgBgDQgDgDACgGIAFgPIAIgPIAGgQIADgFQgGgDABgFQABgDADgCIAIAAIAUABQAEAAAIADIAOAGIANAGIANAGIAUAFQAMADAHAEIAKAHIAKAFIAcARQAIAGACAEQAFAIgHAFQgCACgEAAIgBAAgABfi6IgGANIgGAKQgDAHAAAFQAAADACACQACABAEAAIAXAAIABgGQgBgVAFgLQAAgBABgBQAAAAABgBQAAAAAAAAQABgBAAAAQADgBAFAAIACABIgFgDQgNgHgKgBQgDAEgDAIgAC9icIAAAKIAdAAIgDgCIgKgHIgIgHQgDgCgGAAIABAIgAj5iMIgKgDQgFgDAAgFQAAgCADgFQAJgNANgHIABABIAGgDIAPgJIANgEIANgGQAKgEARgDIAigGQALgCAGADQAFACAGAIQAIAKARAcIADAAQAEACACADQADADgBAEIgCAEQABADgCACQgCAEgFgCQgDAAgCgCIgeACIhYACIgNAAQgYAAgNgCgAj5iaIA0gCQgGgEgCgFQgDgFABgFIgGACIgKAFIgJAEQgGAFgDAAQgDgBgBgCQgDAEgBAEgAiGjDIgDABQAEABAEADQAEAEACAJQABALgCAHIAWgCIAIAAIgFgJQgFgIgKgLIgGgFQgDgCgEAAIgHABg");
	this.shape_4.setTransform(-0.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = new cjs.MovieClip();

(lib.gun_fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("AgxH0IAAvnIBjAAIAAPng");
	this.shape.setTransform(0,-50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgxH0IAAvnIBjAAIAAPng");
	this.shape_1.setTransform(-5,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgTH0IAAvnIAnAAIAAPng");
	this.shape_2.setTransform(-5,-50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AgTH0IAAvnIAnAAIAAPng");
	this.shape_3.setTransform(5,-50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF66").s().p("AgYH0IAAvnIAxAAIAAPng");
	this.shape_4.setTransform(0,-50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9933").s().p("AAZH0IAAvnIAZAAIAAPngAgxH0IAAvnIAZAAIAAPng");
	this.shape_5.setTransform(0,-50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF66").s().p("AgOH0IAAvnIAdAAIAAPng");
	this.shape_6.setTransform(6.5,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:0}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape,p:{x:-5}},{t:this.shape_6}]},1).wait(1));

}).prototype = new cjs.MovieClip();

(lib.LehmGun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AFJhDIAXAAQAAAOAAAPQAAB/glBbQgmBbg0AAQg1AAgkhbQgmhbAAh/QAAgPABgQIAXABQAGhHAWg3QAfhMAsAAQAsAAAfBMQAWA3AHBIgAB6hEIDPABAh4hDIAXAAQAAAOAAAPQAAB/glBbQgmBbg0AAQg1AAgkhbQgmhbAAh/QAAgPABgQIAXABQAGhHAWg3QAfhMAsAAQAsAAAfBMQAWA3AHBIgAlHhEIDPAB");
	this.shape.setTransform(-0.9,-25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ACIBPQgmhaAAiAIABgeIAXABIDPABIAXAAIAAAcQAACAglBaQgmBbg0AAQg1AAgkhbgAk5BPQgmhaAAiAIABgeIAXABIDPABIAXAAIAAAcQAACAglBaQgmBbg0AAQg1AAgkhbg");
	this.shape_1.setTransform(-0.9,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA287").s().p("AB6BkQAFhHAXg2QAfhLAsAAQArAAAfBLQAXA3AGBHgAlHBkQAFhHAXg2QAfhLAsAAQArAAAfBLQAXA3AGBHg");
	this.shape_2.setTransform(-0.8,-42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gun
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AA8nnIAAibIAAgjIBLAAIAAC+IBVAAIAABQIgjAAIgyAAIAAAjIAAKeQBfACAABiIAAC0QAABDgtAWQgWALghAAIkDAAQhkAAAAhkIAAi0QAAghAKgVQAOgdAfgKQAPgGAUgBQAFAAAFAAIAeAAIAjAAIAZAAIAnAAIAjAAIAZAAIAoAAIAeAAQADAAACAAAA8mXIgZAAIAAAjIAAKeAA8nnIAoAAIAjAAAgnnnIAnAAIAjAAIAZAAACHmXIhLAAAgnnnIAAibIAAgjIBKAAIAAC+AA8EqIAArBAiLnnIAAibIAAgjIBLAAIAAC+IAZAAAhAmXIAAAjIAAKeAgnmXIgZAAIhLAAIhGAAIAAgtIAAgjIBGAAIAoAAIAjAAAiLEqIAArBAgnEqIAArBAAjmXIhKAA");
	this.shape_3.setTransform(0,-97.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhvI1QhlAAAAhkIAAi0QAAghALgVQASgJAbgBIAKgBIEDAAIAEAAQBgADAABhIAAC0QAAAggLAWQgWALghAAgACZoHIhLAAIgZAAIhKAAIgZAAIhMAAIhFAAIAAgtIGKAAIAAAtg");
	this.shape_4.setTransform(-1.7,-86.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F9F9F").s().p("AC+ILIAAi0QAAhihfgCIgFAAIkDAAIgKAAQgaACgTAJQAOgdAfgKQAPgGAUgBIAKAAIAeAAIAjAAIAZAAIAoAAIAiAAIAZAAIAoAAIAeAAIAFAAQBfACAABiIAAC0QAABDguAWQALgWAAgggAC0nwIAAgtImKAAIAAgjIBGAAIAoAAIAjAAIAZAAIAoAAIAiAAIAZAAIAoAAIAjAAIBVAAIAABQg");
	this.shape_5.setTransform(0.5,-88.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666633").s().p("AiJjqIBMAAIAAAjIgjAAIAAKdIgeAAIgLAAgAA/HWIAArAIBLAAIAAAjIgkAAIAAKdgAgkHWIAArAIBKAAIAAAjIgjAAIAAKdgAA/k6IAAibIAnAAIAACbgAgkk6IAAibIAnAAIAACbgAiJk6IAAibIApAAIAACbg");
	this.shape_6.setTransform(-0.2,-115);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AAAA55").s().p("ACEHnIgeAAIAAqdIAkAAIAAKdIgGAAgAADHnIAAqdIAjAAIAAKdgAhgHnIAAqdIAjAAIAAKdgABmkpIAAibIgnAAIAAgjIBLAAIAAC+gAADkpIAAibIgnAAIAAgjIBKAAIAAC+gAhgkpIAAibIgpAAIAAgjIBMAAIAAC+g");
	this.shape_7.setTransform(-0.2,-116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// gun fire
	this.gun_fire = new lib.gun_fire();
	this.gun_fire.name = "gun_fire";
	this.gun_fire.parent = this;
	this.gun_fire.visible = false;
	this.gun_fire.setTransform(0,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.gun_fire).wait(1));

}).prototype = new cjs.MovieClip();


(lib.Lehm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gun
	this.LehmGun = new lib.LehmGun();
	this.LehmGun.name = "LehmGun";
	this.LehmGun.parent = this;
	this.LehmGun.setTransform(0,0.1,1,1,0,0,0,-3.3,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.LehmGun).wait(1));

	// head
	this.LehmHead = new lib.LehmHead();
	this.LehmHead.name = "LehmHead";
	this.LehmHead.parent = this;
	this.LehmHead.setTransform(0,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.LehmHead).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkGBLQgFgjAAglQAAiUBMhpQBNhoBrAAQBrAABMBoQA4BNAPBkQAEAaABAbQABAMAAALQAAALgBAMQgBAZgDAYAACFKIAAAZIlXAAIBPkYIEIAAID2AAIBeD/IlUAAIAAj/");
	this.shape.setTransform(3,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69665A").s().p("AlVCMIBQkXIEHAAIAAD+IAAj+ID1AAIBfD+IlUAAIAAAZg");
	this.shape_1.setTransform(3,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAKDXIkIAAQgFgjAAgmQAAiTBMhpQBMhoBrAAQBrAABNBoQA4BNAPBkQADAZABAbIABAXIgBAYQgBAZgDAYg");
	this.shape_2.setTransform(2.3,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = new cjs.MovieClip();