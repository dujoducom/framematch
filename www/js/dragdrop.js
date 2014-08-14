var canvas, stage;

var mouseTarget;	// the display object currently under the mouse, or being dragged
var dragStarted;	// indicates whether we are currently in a drag operation
var offset;
var update = true;
var bgColor = "#5154d2";
var buttonColor = "#3032b0";
var skyColor = "#08a5ff";//"#734d73";
var grassColor= "#08cca5";
var logoBoxDark = "110b15";
var backButton;
var isOverlay = true;
var objContainer;
var overlay; 
var headerBox;

function init() {
	if (window.top != window) {
		document.getElementById("header").style.display = "none";
	}
	document.getElementById("loader").className = "loader";
	// create stage and point it to the canvas:
	canvas = document.getElementById("stageCanvas");

	//check to see if we are running in a browser with touch support
	stage = new createjs.Stage(canvas);
	createjs.Touch.enable(stage);

	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

	// load the source image:
	var image = new Image();
	image.src = "./img/art/01.png";

	var objLoader = new createjs.LoadQueue(true);
	
	objLoader.on("fileload", handleObjLoad, this);
	objLoader.on("complete", handleObjComplete, this);

// objManifest is auto generated by debug output for object layout
var objManifest = [
{src:"img/dragdrop/object17.png", id:"object17", data:{flip:0, scale:0.3, x:345, y:726}},
{src:"img/dragdrop/object17.png", id:"object17", data:{flip:0, scale:0.5, x:345, y:726}},
{src:"img/dragdrop/object62.png", id:"object62", data:{flip:0, scale:0.5, x:969, y:586}},
{src:"img/dragdrop/object60.png", id:"object60", data:{flip:0, scale:0.3, x:865, y:595}},
{src:"img/dragdrop/object14.png", id:"object14", data:{flip:0, scale:0.5, x:671, y:734}},
{src:"img/dragdrop/object58.png", id:"object58", data:{flip:0, scale:0.35, x:586, y:699}},
{src:"img/dragdrop/object58.png", id:"object58", data:{flip:1, scale:0.25, x:491, y:669}},
{src:"img/dragdrop/object53.png", id:"object53", data:{flip:0, scale:0.5, x:87, y:493}},
{src:"img/dragdrop/object42.png", id:"object42", data:{flip:0, scale:0.5, x:48, y:420}},
{src:"img/dragdrop/object08.png", id:"object08", data:{flip:0, scale:0.3, x:930, y:487}},
{src:"img/dragdrop/object08.png", id:"object08", data:{flip:0, scale:0.4, x:929, y:484}},
{src:"img/dragdrop/object08.png", id:"object08", data:{flip:0, scale:0.5, x:930, y:484}},
{src:"img/dragdrop/object09.png", id:"object09", data:{flip:0, scale:0.4, x:892, y:410}},
{src:"img/dragdrop/object09.png", id:"object09", data:{flip:0, scale:0.5, x:892, y:410}},
{src:"img/dragdrop/object16.png", id:"object16", data:{flip:0, scale:0.5, x:400, y:671}},
{src:"img/dragdrop/object18.png", id:"object18", data:{flip:0, scale:0.5, x:125, y:730}},
{src:"img/dragdrop/object25.png", id:"object25", data:{flip:0, scale:0.5, x:491, y:741}},
{src:"img/dragdrop/object22.png", id:"object22", data:{flip:0, scale:0.5, x:454, y:740}},
{src:"img/dragdrop/object21.png", id:"object21", data:{flip:0, scale:0.5, x:496, y:742}},
{src:"img/dragdrop/object23.png", id:"object23", data:{flip:0, scale:0.5, x:529, y:735}},
{src:"img/dragdrop/object28.png", id:"object28", data:{flip:1, scale:0.35, x:875, y:324}},
{src:"img/dragdrop/object28.png", id:"object28", data:{flip:0, scale:0.5, x:875, y:324}},
{src:"img/dragdrop/object10.png", id:"object10", data:{flip:0, scale:0.4, x:983, y:418}},
{src:"img/dragdrop/object10.png", id:"object10", data:{flip:0, scale:0.5, x:983, y:418}},
{src:"img/dragdrop/object49.png", id:"object49", data:{flip:0, scale:0.5, x:940, y:360}},
{src:"img/dragdrop/object43.png", id:"object43", data:{flip:0, scale:0.5, x:932, y:298}},
{src:"img/dragdrop/object12.png", id:"object12", data:{flip:0, scale:0.5, x:984, y:334}},
{src:"img/dragdrop/object15.png", id:"object15", data:{flip:1, scale:0.4, x:428, y:567}},
{src:"img/dragdrop/object15.png", id:"object15", data:{flip:0, scale:0.5, x:428, y:567}},
{src:"img/dragdrop/object15.png", id:"object15", data:{flip:0, scale:0.6, x:428, y:567}},
{src:"img/dragdrop/object06.png", id:"object06", data:{flip:0, scale:0.5, x:591, y:601}},
{src:"img/dragdrop/object06.png", id:"object06", data:{flip:1, scale:0.3, x:452, y:612}},
{src:"img/dragdrop/object06.png", id:"object06", data:{flip:1, scale:0.3, x:452, y:612}},
{src:"img/dragdrop/object13.png", id:"object13", data:{flip:0, scale:0.5, x:748, y:622}},
{src:"img/dragdrop/object07.png", id:"object07", data:{flip:0, scale:0.5, x:665, y:570}},
{src:"img/dragdrop/object07.png", id:"object07", data:{flip:1, scale:0.4, x:702, y:568}},
{src:"img/dragdrop/object14.png", id:"object14", data:{flip:1, scale:0.6, x:674, y:688}},
{src:"img/dragdrop/object27.png", id:"object27", data:{flip:0, scale:0.5, x:126, y:419}},
{src:"img/dragdrop/object52.png", id:"object52", data:{flip:0, scale:0.5, x:80, y:302}},
{src:"img/dragdrop/object29.png", id:"object29", data:{flip:0, scale:0.5, x:107, y:367}},
{src:"img/dragdrop/object27.png", id:"object27", data:{flip:0, scale:0.5, x:126, y:419}},
{src:"img/dragdrop/object52.png", id:"object52", data:{flip:0, scale:0.5, x:80, y:302}},
{src:"img/dragdrop/object29.png", id:"object29", data:{flip:0, scale:0.5, x:107, y:367}},
{src:"img/dragdrop/object33.png", id:"object33", data:{flip:0, scale:0.5, x:63, y:248}},
{src:"img/dragdrop/object03.png", id:"object03", data:{flip:0, scale:0.5, x:35, y:215}},
{src:"img/dragdrop/object34.png", id:"object34", data:{flip:0, scale:0.5, x:36, y:213}},
{src:"img/dragdrop/object35.png", id:"object35", data:{flip:0, scale:0.5, x:125, y:229}},
{src:"img/dragdrop/object48.png", id:"object48", data:{flip:0, scale:0.3, x:41, y:126}},
{src:"img/dragdrop/object46.png", id:"object46", data:{flip:0, scale:0.3, x:100, y:175}},
{src:"img/dragdrop/object39.png", id:"object39", data:{flip:0, scale:0.3, x:115, y:99}},
{src:"img/dragdrop/object48.png", id:"object48", data:{flip:0, scale:0.4, x:41, y:126}},
{src:"img/dragdrop/object46.png", id:"object46", data:{flip:0, scale:0.4, x:100, y:175}},
{src:"img/dragdrop/object39.png", id:"object39", data:{flip:0, scale:0.4, x:115, y:99}},
{src:"img/dragdrop/object48.png", id:"object48", data:{flip:0, scale:0.5, x:41, y:126}},
{src:"img/dragdrop/object46.png", id:"object46", data:{flip:0, scale:0.5, x:100, y:175}},
{src:"img/dragdrop/object39.png", id:"object39", data:{flip:0, scale:0.5, x:115, y:99}},
{src:"img/dragdrop/object32.png", id:"object32", data:{flip:0, scale:0.5, x:978, y:155}},
{src:"img/dragdrop/object31.png", id:"object31", data:{flip:0, scale:0.5, x:966, y:272}},
{src:"img/dragdrop/object44.png", id:"object44", data:{flip:0, scale:0.5, x:891, y:248}},
{src:"img/dragdrop/object01.png", id:"object01", data:{flip:0, scale:0.5, x:965, y:219}},
{src:"img/dragdrop/object41.png", id:"object41", data:{flip:0, scale:0.5, x:934, y:105}},
{src:"img/dragdrop/object01.png", id:"object01", data:{flip:0, scale:0.5, x:965, y:219}},
{src:"img/dragdrop/object41.png", id:"object41", data:{flip:0, scale:0.5, x:934, y:105}},
{src:"img/dragdrop/object01.png", id:"object01", data:{flip:0, scale:0.5, x:965, y:219}},
{src:"img/dragdrop/object41.png", id:"object41", data:{flip:0, scale:0.5, x:934, y:105}},
{src:"img/dragdrop/object30.png", id:"object30", data:{flip:0, scale:0.5, x:893, y:172}},
{src:"img/dragdrop/object37.png", id:"object37", data:{flip:0, scale:0.3, x:106, y:620}},
{src:"img/dragdrop/object37.png", id:"object37", data:{flip:0, scale:0.4, x:76, y:624}},
{src:"img/dragdrop/object37.png", id:"object37", data:{flip:0, scale:0.5, x:40, y:619}},
{src:"img/dragdrop/object61.png", id:"object61", data:{flip:0, scale:0.2, x:258, y:629}},
{src:"img/dragdrop/object61.png", id:"object61", data:{flip:0, scale:0.25, x:228, y:630}},
{src:"img/dragdrop/object61.png", id:"object61", data:{flip:0, scale:0.35, x:190, y:620}},
{src:"img/dragdrop/object59.png", id:"object59", data:{flip:0, scale:0.2, x:359, y:617}},
{src:"img/dragdrop/object59.png", id:"object59", data:{flip:0, scale:0.25, x:340, y:614}},
{src:"img/dragdrop/object59.png", id:"object59", data:{flip:0, scale:0.3, x:321, y:610}}];
/*

bushes
{src:"img/dragdrop/object04.png", id:"object04", data:{x:934, y:469}},
{src:"img/dragdrop/object24.png", id:"object24", data:{x:935, y:469}},
{src:"img/dragdrop/object19.png", id:"object19", data:{x:854, y:572}},
{src:"img/dragdrop/object05.png", id:"object05", data:{x:961, y:564}},

mountains 
{src:"img/dragdrop/object51.png", id:"object51", data:{x:101, y:592}},
{src:"img/dragdrop/object50.png", id:"object50", data:{x:935, y:266}},

clouds

{src:"img/dragdrop/object45.png", id:"object45", data:{scale:0.5, x:734, y:26}},
{src:"img/dragdrop/object47.png", id:"object47", data:{scale:0.5, x:801, y:70}},
{src:"img/dragdrop/object38.png", id:"object38", data:{scale:0.5, x:820, y:22}},

*/

	objContainer = new createjs.Container();

	objLoader.loadManifest(objManifest);
	createjs.Ticker.addEventListener("tick", stage);

	var bg = new createjs.Shape();
	bg.graphics.beginFill(bgColor);
	bg.graphics.drawRect(0,0,1024,768);
	bg.graphics.endFill();

	frame = new createjs.Bitmap("img/dragdrop/frame.png");
	
	frame.x = 170;
	frame.y = 100;

	overlay = new createjs.Bitmap("img/dragdrop/overlay.png");
	overlay.shadow = new createjs.Shadow("#333333", 2, 2, 5);
	overlay.x = 140;
	overlay.y = 170;

	overlay.on("pressmove", function(evt) {
		this.parent.removeChild(this);
	});

	var sky = new createjs.Shape();
	sky.graphics.beginFill(skyColor);
	sky.graphics.drawRect(frame.x+2,frame.y+2,671,427);
	sky.graphics.endFill();
	sky.shadow = new createjs.Shadow("#111133", 0, 0, 40);

	var grass = new createjs.Shape();
	grass.graphics.beginFill(grassColor);
	grass.graphics.drawRect(frame.x,frame.y+200,670,210);
	grass.graphics.endFill();

	backButton = createButton(880, 690, 140, 'RESET', resetObjects);
	saveButton = createButton(740, 690, 120, 'SAVE', saveImage);

	backButton.shadow = new createjs.Shadow("#6666ff", 0,0,15);
	saveButton.shadow = new createjs.Shadow("#6666ff", 0,0,15);
	
	createLogoBox();

	stage.addChild(sky, grass, objContainer, frame, backButton, saveButton, overlay, headerBox);		
	
	//image.onload = handleImageLoad;

}


function createLogoBox() {

	headerBox = new createjs.Container();
	headerBox.x = 0;
	headerBox.y = 0;//90;

	var headerBoxShape = new createjs.Shape();
	headerBoxShape.graphics.beginFill(logoBoxDark);
	headerBoxShape.graphics.drawRect(0,0,1024,60);
	headerBoxShape.graphics.endFill();
	headerBox.headerBoxShape = headerBoxShape;
	headerBox.addChild(headerBoxShape);

	var headerText = new createjs.Text("KOHL'S ART GENERATION GALLERY  -  ILLUSIONS: NEAR AND FAR", "26px PT Sans", "#eee");
	headerText.x = 20;
	headerText.y = 16;
	headerText.shadow = new createjs.Shadow("#888888", 0,0,5);
	headerBox.shadow = new createjs.Shadow("#000000", 0,0,60);
	headerBox.addChild(headerText);


}


function stop() {
	//createjs.Ticker.removeEventListener("tick", tick);
}
function handleObjComplete(event) {
	stage.update();
}
function handleFrameLoad(event) {
	
}

function createButton(x, y, w, labelText, clickFunction) {
	
	var btn = new createjs.Container();
	
	btn.cursor = "pointer";

	var btnBG = new createjs.Shape();

	btnBG.graphics.beginFill(buttonColor).drawRoundRect(-20, -20, w, 75, 15).endFill();

	var btnTXT = new createjs.Text(labelText, "30px Arial", "#eee");

	btn.bg = btnBG;
	btn.txt = btnTXT;

	btn.addChild(btnBG, btnTXT);
	btn.y = y;
	btn.x =x;
	
	
	btn.on("mousedown", function(evt) {
		clickFunction();
	});

	return btn;

}

function outputDebug() {
	var n = objContainer.getNumChildren();
	var o = $("#debugText");
	


	o.append("var objManifest = [\n");
	
	var oc = "";
	for(i = 0; i < n; i++) {

		var c = objContainer.getChildAt(i);
		
		oc += '{src:"img/dragdrop/'+c.name +'.png", id:"'+c.name+'", data:{flip:'+c.flip+', scale:'+c.scale+', x:' + c.x + ', y:' + c.y + "}},\n";

		//document.getElementById("debug").value = "{x:" + c.x + ", y:" + c.y + "}";	
	}
	
	oc = oc.substr(0, oc.length - 2);

	o.append( oc + '];');

}
function saveImage() {
	// more user friendly: http://greenethumb.com/article/1429/user-friendly-image-saving-from-the-canvas/

	var outputCan = document.getElementById("c2");
	var outputImg = outputCan.getContext('2d');

	
	// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	outputImg.drawImage(canvas, 170,100,675,431,0,0,675,431);

	savePNG(outputCan, "My_Landscape", "saveme.php");

	//var image = outputCan.toDataURL("image/png").replace("image/png", "image/octet-stream");
	
	//window.location.href=image; // it will save locally

}


function resetObjects() {
	

	var n = objContainer.getNumChildren();
	for(i = 0; i < n; i++) {
		var c = objContainer.getChildAt(i);
		createjs.Tween.get(c).to({x:c.origX, y:c.origY}, 500, createjs.Ease.circOut); //circOut is really nice
		//c.x = c.origX;
		//c.y = c.origY;
	}
}

function handleObjLoad(event) {


	var item = event.item;
	var image = event.result;
	var bitmap;
	
	//var container = new createjs.Container();
	
	console.log(image);
	// create and populate the screen with random daisies:

	bitmap = new createjs.Bitmap(image);
	objContainer.addChild(bitmap);
	bitmap.x = item.data.x;
	bitmap.y = item.data.y;
	bitmap.flip = item.data.flip;
	bitmap.origX = item.data.x;
	bitmap.origY = item.data.y;

	//bitmap.rotation = 360 * Math.random()|0;
	bitmap.regX = bitmap.image.width/2|0;
	bitmap.regY = bitmap.image.height/2|0;
	var s = 0.5;

	if(item.data.scale) {
		s = item.data.scale;
	}

	bitmap.scaleX = bitmap.scaleY = bitmap.scale = s;//Math.random()*0.4+0.6;

	if(bitmap.flip) {
		bitmap.scaleX = -bitmap.scaleX;
	}

	bitmap.name = item.id;
	bitmap.cursor = "pointer";

	bitmap.shadow = new createjs.Shadow("#111111", 1, 1, 3);
	
	// using "on" binds the listener to the scope of the currentTarget by default
	// in this case that means it executes in the scope of the button.
	bitmap.on("mousedown", function(evt) {
		
		this.parent.addChild(this);
		
		this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};

		if(isOverlay) {
			isOverlay = false;
			createjs.Tween.get(overlay).to({alpha:0}, 500).call(function() {overlay.parent.removeChild(overlay);}); //circOut is really nice
			//overlay.parent.removeChild(overlay);
		}

		console.log(this.name);
		
	});
	
	// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
	bitmap.on("pressmove", function(evt) {
		this.x = evt.stageX+ this.offset.x;
		this.y = evt.stageY+ this.offset.y;
		// indicate that the stage should be updated on the next tick:
		update = true;
	});
	
	bitmap.on("rollover", function(evt) {
		if(this.flip) {
			this.scaleX = -this.scale * 1.1;
			this.scaleY = this.scale * 1.1;
		} else {
			this.scaleX = this.scaleY = this.scale*1.1;
		}
		update = true;
	});
	
	bitmap.on("rollout", function(evt) {
		if(this.flip) {
			this.scaleX = - this.scale;
			this.scaleY = this.scale;
		} else {
			this.scaleX = this.scaleY = this.scale;
		}
		update = true;
	});


	//document.getElementById("loader").className = "";
	//stage.addChild(container);
}


savePNG = function(cnvs, fname, url) {
	if(!cnvs || !url) return;
	fname = fname || 'picture';
	
	var data = cnvs.toDataURL("image/png");
	data = data.substr(data.indexOf(',') + 1).toString();
	
	var dataInput = document.createElement("input") ;
	dataInput.setAttribute("name", 'imgdata') ;
	dataInput.setAttribute("value", data);
	dataInput.setAttribute("type", "hidden");
	
	var nameInput = document.createElement("input") ;
	nameInput.setAttribute("name", 'name') ;
	nameInput.setAttribute("value", fname + '.png');
	 
	var myForm = document.createElement("form");
	myForm.method = 'post';
	myForm.action = url;
	myForm.appendChild(dataInput);
	myForm.appendChild(nameInput);
	 
	document.body.appendChild(myForm);
	myForm.submit() ;
	document.body.removeChild(myForm);
}
