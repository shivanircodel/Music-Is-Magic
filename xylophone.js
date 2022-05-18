var lib, images, createjs;

function keyPressed(t) {
	var n = t.key.toLowerCase();
	"1" == n && exportRoot.sound1.gotoAndPlay(0), "2" == n && exportRoot.sound2.gotoAndPlay(0), "3" == n && exportRoot.sound3.gotoAndPlay(0), "4" == n && exportRoot.sound4.gotoAndPlay(0), "5" == n && exportRoot.sound5.gotoAndPlay(0), "6" == n && exportRoot.sound6.gotoAndPlay(0), "7" == n && exportRoot.sound7.gotoAndPlay(0), "8" == n && exportRoot.sound8.gotoAndPlay(0), "9" == n && exportRoot.sound9.gotoAndPlay(0), "0" == n && exportRoot.sound10.gotoAndPlay(0), "q" == n && exportRoot.sound11.gotoAndPlay(0), "w" == n && exportRoot.sound12.gotoAndPlay(0), "e" == n && exportRoot.sound13.gotoAndPlay(0), "r" == n && exportRoot.sound14.gotoAndPlay(0), "t" == n && exportRoot.sound15.gotoAndPlay(0)
}! function(t, n, i) {
	var e;
	(t.xylophone = function() {
		this.initialize(),
			this.sound15 = new t.soundbutton15,
			this.sound15.setTransform(607, 164),
			new i.ButtonHelper(this.sound15, 0, 1, 2, !1, new t.soundbutton15, 3),
			this.sound14 = new t.soundbutton14,
			this.sound14.setTransform(560, 164),
			new i.ButtonHelper(this.sound14, 0, 1, 2, !1, new t.soundbutton14, 3),
			this.sound13 = new t.soundbutton13,
			this.sound13.setTransform(512, 164),
			new i.ButtonHelper(this.sound13, 0, 1, 2, !1, new t.soundbutton13, 3),
			this.sound12 = new t.soundbutton12,
			this.sound12.setTransform(464, 164),
			new i.ButtonHelper(this.sound12, 0, 1, 2, !1, new t.soundbutton12, 3),
			this.sound11 = new t.soundbutton11,
			this.sound11.setTransform(416, 164),
			new i.ButtonHelper(this.sound11, 0, 1, 2, !1, new t.soundbutton11, 3),
			this.sound10 = new t.soundbutton10,
			this.sound10.setTransform(368, 164),
			new i.ButtonHelper(this.sound10, 0, 1, 2, !1, new t.soundbutton10, 3),
			this.sound9 = new t.soundbutton9,
			this.sound9.setTransform(320, 164),
			new i.ButtonHelper(this.sound9, 0, 1, 2, !1, new t.soundbutton9, 3),
			this.sound8 = new t.soundbutton8,
			this.sound8.setTransform(272, 164),
			new i.ButtonHelper(this.sound8, 0, 1, 2, !1, new t.soundbutton8, 3),
			this.sound7 = new t.soundbutton7,
			this.sound7.setTransform(224, 164),
			new i.ButtonHelper(this.sound7, 0, 1, 2, !1, new t.soundbutton7, 3),
			this.sound6 = new t.soundbutton6,
			this.sound6.setTransform(176, 164),
			new i.ButtonHelper(this.sound6, 0, 1, 2, !1, new t.soundbutton6, 3),
			this.sound5 = new t.soundbutton5,
			this.sound5.setTransform(128, 164),
			new i.ButtonHelper(this.sound5, 0, 1, 2, !1, new t.soundbutton5, 3),
			this.sound4 = new t.soundbutton4,
			this.sound4.setTransform(80, 164),
			new i.ButtonHelper(this.sound4, 0, 1, 2, !1, new t.soundbutton4, 3),
			this.sound3 = new t.soundbutton3,
			this.sound3.setTransform(32, 164),
			new i.ButtonHelper(this.sound3, 0, 1, 2, !1, new t.soundbutton3, 3),
			this.sound2 = new t.soundbutton2,
			this.sound2.setTransform(-16, 164),
			new i.ButtonHelper(this.sound2, 0, 1, 2, !1, new t.soundbutton2, 3),
			this.sound1 = new t.soundbutton1,
			this.sound1.setTransform(-64, 164),
			new i.ButtonHelper(this.sound1, 0, 1, 2, !1, new t.soundbutton1, 3),
			this.text = new i.Text("VirtualMusicalInstruments.com", "22px Arial"),
			this.text.lineHeight = 26,
			this.text.lineWidth = 307,
			this.text.setTransform(81.1, 349.2),
			this.instance = new t.xylophone_1,
			this.instance.setTransform(0, 1),
			this.text_1 = new i.Text("Keys:", "14px Arial", "#FFFFFF"),
			this.text_1.textAlign = "center",
			this.text_1.lineHeight = 16,
			this.text_1.lineWidth = 106,
			this.text_1.setTransform(487.5, 194.4),
			this.addChild(this.text_1, this.instance, this.text, this.sound1, this.sound6, this.sound4, this.sound3, this.sound2, this.sound7, this.sound8, this.sound5, this.sound9, this.sound10, this.sound11, this.sound12, this.sound13, this.sound14, this.sound15)
	}).prototype = e = new i.Container,
		e.nominalBounds = new i.Rectangle(0, 1, 800, 345), (t.xylophone_1 = function() {
			this.initialize(n.xylophone_1)
		}).prototype = e = new i.Bitmap,
		e.nominalBounds = new i.Rectangle(0, 0, 800, 345), (t.button1 = function() {
			this.initialize(),
				this.shape = new i.Shape,
				this.shape.graphics.f("#ffffff").s().p("ABKoIQAGAGAAAJIAAP0QAAAIgGAGQgGAGgIAAIh3AAQgIAAgGgGQgGgGAAgIIAAv0QAAgJAGgGQAGgGAIAAIB3AAQAIAAAGAGg"),
				this.shape.setTransform(130, 0),
				this.addChild(this.shape)
		}).prototype = e = new i.Container,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton15 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound15")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton14 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound14")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton13 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound13")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton12 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound12")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton11 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound11")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton10 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound10")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton9 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound9")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton8 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound8")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton7 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound7")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton6 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound6")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton5 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound5")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton4 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound4")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton3 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound3")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton2 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound2")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.15),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3.2,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0), (t.soundbutton1 = function(n, e, s) {
			null == s && (s = !1),
				this.initialize(n, e, s, {}),
				this.frame_2 = function() {
					playSound("sound1")
				},
				this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.button1("synched", 0),
				this.instance.setTransform(-208, 9, 2.6, 3.3),
				this.instance.alpha = .5,
				this.instance._off = !0,
				this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .8
				}, 0).wait(1).to({
					scaleX: 2.5,
					scaleY: 3.4,
					x: -195,
					y: 10,
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = e = new i.MovieClip,
		e.nominalBounds = new i.Rectangle(0, 0, 0, 0)
}(lib = lib || {}, images = images || {}, createjs = createjs || {}),
window.addEventListener("keydown", keyPressed);

function initAudio() {
	var audio = new Audio('xylophone_sounds/a01wav.mp3');
	var self = this;
	self.audio = audio;
	var startAudio = function() {
		self.audio.play();
		document.removeEventListener("touchstart", self.startAudio, false);
	}
	self.startAudio = startAudio;
	var pauseAudio = function() {
		self.audio.pause();
		self.audio.removeEventListener("play", self.pauseAudio, false);
	}
	self.pauseAudio = pauseAudio;
	document.addEventListener("touchstart", self.startAudio, false);
	self.audio.addEventListener("play", self.pauseAudio, false);
}
var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	images = images || {};
	var manifest = [{
		src: "xylophone.jpg",
		id: "xylophone_1"
	}, {
		src: "xylophone_sounds/C3.mp3",
		id: "sound1"
	}, {
		src: "xylophone_sounds/D3.mp3",
		id: "sound2"
	}, {
		src: "xylophone_sounds/E3.mp3",
		id: "sound3"
	}, {
		src: "xylophone_sounds/F3.mp3",
		id: "sound4"
	}, {
		src: "xylophone_sounds/G3.mp3",
		id: "sound5"
	}, {
		src: "xylophone_sounds/A4.mp3",
		id: "sound6"
	}, {
		src: "xylophone_sounds/B4.mp3",
		id: "sound7"
	}, {
		src: "xylophone_sounds/C4.mp3",
		id: "sound8"
	}, {
		src: "xylophone_sounds/D4.mp3",
		id: "sound9"
	}, {
		src: "xylophone_sounds/E4.mp3",
		id: "sound10"
	}, {
		src: "xylophone_sounds/F4.mp3",
		id: "sound11"
	}, {
		src: "xylophone_sounds/G4.mp3",
		id: "sound12"
	}, {
		src: "xylophone_sounds/A5.mp3",
		id: "sound13"
	}, {
		src: "xylophone_sounds/B5.mp3",
		id: "sound14"
	}, {
		src: "xylophone_sounds/C5.mp3",
		id: "sound15"
	}];
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") {
		images[evt.item.id] = evt.result;
	}
}

function handleComplete() {
	exportRoot = new lib.xylophone();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();
	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
  document.getElementById("InstrumentCanvas").style.display = "block"
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, 0.2);
}