(function() {
 	
	var ArtObject = function(objectDefinition) {
	  this.initialize(objectDefinition);
	}

	var p = ArtObject.prototype = new createjs.Container();
	 
	p.Container_initialize = p.initialize;

	p.initialize = function(objectDefinition) {
	    this.Container_initialize();
	    var t = this;
	    var o = objectDefinition;

	    t.id = o.id;
	    t.def = o;

	    t.artistName = o.artistName;
	    t.artistOrigin = o.artistOrigin;
	    t.artistLifeSpan = o.artistLifeSpan;
	    t.artTitle = o.artTitle;
	    t.artDate = o.artDate;
	    t.artMedium = o.artMedium;
	    t.artDimensions = o.artDimensions;
	    t.acquisitionDetails = stringDivider(o.acquisitionDetails, 50, "\n");
	    t.artId = o.artId;
	    t.photoCredit = o.photoCredit;
	    t.artImageURL = o.artImage;

	    t.audio = [];

	    t.audio[ArtFrame.FRAME_TYPES.KING_LOUIS] = o.audio.frame_kinglouis;
	    t.audio[ArtFrame.FRAME_TYPES.FRAME_REVERSE] = o.audio.frame_reverse;
	    t.audio[ArtFrame.FRAME_TYPES.FRAME_NARROW] = o.audio.frame_narrow;
	    t.audio[ArtFrame.FRAME_TYPES.CASSETTA] = o.audio.frame_cassetta;

	    t.comment = [];
	    t.comment[ArtFrame.FRAME_TYPES.KING_LOUIS] = o.commentary.frame_kinglouis;
	    t.comment[ArtFrame.FRAME_TYPES.FRAME_REVERSE] = o.commentary.frame_reverse;
	    t.comment[ArtFrame.FRAME_TYPES.FRAME_NARROW] = o.commentary.frame_narrow;
	    t.comment[ArtFrame.FRAME_TYPES.CASSETTA] = o.commentary.frame_cassetta;

	}

	stringDivider = function(str, width, spaceReplacer) {
	    if (str.length>width) {
	        var p=width
	        for (;p>0 && str[p]!=' ';p--) {
	        }
	        if (p>0) {
	            var left = str.substring(0, p);
	            var right = str.substring(p+1);
	            return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
	        }
	    }
	    return str;
	}

	p.getHTMLDesc = function() {
		
		var t = this;
		return desc;
		
	}
	 
	window.ArtObject = ArtObject
;
	
}());