var lib, images, createjs;

function keyPressed(t) {
	var i = t.key.toLowerCase();
	"a" == i && exportRoot.top_button.gotoAndPlay(0), "b" == i && exportRoot.middle_button.gotoAndPlay(0), "c" == i && exportRoot.bottom_button.gotoAndPlay(0)
}! function(t, i, e) {
	var n;
	(t.bongos = function() {
		this.initialize(),
			this.left_button = new t.ridebutton,
			this.left_drum.setTransform(110, 40.3, .92, .91),
			new e.ButtonHelper(this.left_button, 0, 1, 2, !1, new t.ridebutton, 3),
			this.right_drum = new t.smcrashbutton,
			this.right_drum.setTransform(375.3, 33.7, .934, 1.037, 0, -13.3, -16.7),
			new e.ButtonHelper(this.right_drum, 0, 1, 2, !1, new t.smcrashbutton, 3),
			this.instance = new t.bongos_1,
			this.instance.setTransform(-.9, 1),
			this.addChild(this.instance, this.right_drum, this.left_drum, this.text)
	}).prototype = n = new e.Container,
		n.nominalBounds = new e.Rectangle(-.9, -53.7, 500, 322.5), (t.bongos_1 = function() {
			this.initialize(i.bongos_1)
		}).prototype = n = new e.Bitmap,
		n.nominalBounds = new e.Rectangle(0, 0, 500, 242), (t.smallcrash = function() {
			this.initialize(),
				this.shape = new e.Shape,
				this.shape.graphics.f("#666666").s().p("ABQFdQlihVkphtQimhAiShEQjZhlhvhWQg3gtgdgnQgcgkgHgfQgEgSADgOQAJhyFEgJQFwgJIlCDQCDAfB5AiQGNBwE7CXQBKAfBAAiQEZCaAcB3QAhCRluAIIgtABQliAAoGh7g"),
				this.shape.setTransform(-1.6, 3.8),
				this.addChild(this.shape)
		}).prototype = n = new e.Container,
		n.nominalBounds = new e.Rectangle(-135, -43.4, 266.7, 94.5), (t.ride = function() {
			this.initialize(),
				this.shape = new e.Shape,
				this.shape.graphics.f("#666666").s().p("Av5OFQg/gBgtgRQgbgIgSgLQiWhXCdkRQC0k2HVlsQBwhXBshNQFmj8FwigQBWgmBQgdQFiiACwA6QDVBHiyE0Qi1E4nUFsQkuDrkuCrQitBeiqBLQj8BtiwAhQhNANg+AAIgRgBg"),
				this.shape.setTransform(9.3, -9.3),
				this.addChild(this.shape)
		}).prototype = n = new e.Container,
		n.nominalBounds = new e.Rectangle(-115.1, -99.5, 248.9, 180.4), (t.smcrashbutton = function(i, n, s) {
			null == s && (s = !1),
				this.initialize(i, n, s, {}),
				this.frame_2 = function() {
					playSound("_1bwav")
				},
				this.timeline.addTween(e.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.smallcrash("synched", 0),
				this.instance.setTransform(-2.1, .7, .851, 1),
				this.instance.alpha = .301,
				this.instance._off = !0,
				this.timeline.addTween(e.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .602
				}, 0).wait(1).to({
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = n = new e.MovieClip,
		n.nominalBounds = new e.Rectangle(0, 0, 0, 0), (t.ridebutton = function(i, n, s) {
			null == s && (s = !1),
				this.initialize(i, n, s, {}),
				this.frame_2 = function() {
					playSound("_1awav")
				},
				this.timeline.addTween(e.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
				this.instance = new t.ride("synched", 0),
				this.instance.setTransform(-2, .3, .707, .707, 33.5),
				this.instance.alpha = .301,
				this.instance._off = !0,
				this.timeline.addTween(e.Tween.get(this.instance).wait(1).to({
					startPosition: 0,
					_off: !1
				}, 0).wait(1).to({
					alpha: .602
				}, 0).wait(1).to({
					alpha: 1
				}, 0).to({
					_off: !0
				}, 1).wait(1))
		}).prototype = n = new e.MovieClip,
		n.nominalBounds = new e.Rectangle(0, 0, 0, 0)
}(lib = lib || {}, images = images || {}, createjs = createjs || {}),
window.addEventListener("keydown", keyPressed);

function initAudio() {
	var audio = new Audio('musical_instruments/trumpet/sounds/a01wav.mp3');
	var self = this;
	//not sure if you need this, but it's better to be safe
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
		src: "trumpet.jpg",
		id: "trumpet_1"
	}, {
		src: "trumpet_sounds/_1awav.mp3",
		id: "_1awav"
	}, {
		src: "trumpet_sounds/_1bwav.mp3",
		id: "_1bwav"
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
	exportRoot = new lib.bongos();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();
	createjs.Ticker.setFPS(120);
	createjs.Ticker.addEventListener("tick", stage);
	document.getElementById("InstrumentCanvas").style.display = "block"
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}