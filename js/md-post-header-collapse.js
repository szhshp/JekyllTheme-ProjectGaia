var arrBreakId =  new Array("uyan_frame");
var arrCollapsableTag = new Array("H1","H2","H3");
var arrExcludeTagPrefix = new Array("sidebar-toc-Ik4D-");
// var excludeTagList = new Array(""); //TODO
function headerCollapsible () {
	$(':not(blockquote)>h1, :not(blockquote)>h2, :not(blockquote)>h3').each(function(index, curHeader) {
		if(index!=0)  $(curHeader).prepend('<span class="glyphicon glyphicon-minus headerbtn" aria-hidden="true"></span>');
		/**
		* [curHeader: current header]
		* [this: current span icon]
		*/
		$(curHeader).find('span.headerbtn.glyphicon').click(function(event) {
			var tagNameLevel = arrCollapsableTag.indexOf($(curHeader).prop("tagName")); 
			if ($(curHeader).hasClass('collapsed')) {
				/*if this header already collapsed*/
				var displayIt = true;
				$(curHeader).removeClass('collapsed');
				$(this).removeClass('glyphicon-plus');
				$(this).addClass('glyphicon-minus');
			}else{
				var displayIt = false;
				$(curHeader).addClass('collapsed');
				$(this).removeClass('glyphicon-minus');
				$(this).addClass('glyphicon-plus');
			}

			var nextElem = $(curHeader).next();
			var ignoreFlag;
			while( 
				arrBreakId.indexOf(nextElem.prop('id')) ==-1 
				&& (arrCollapsableTag.indexOf(nextElem.prop("tagName")) == -1 || arrCollapsableTag.indexOf(nextElem.prop("tagName")) > tagNameLevel)
				 ){
				ignoreFlag = false;
				// console.log(nextElem);
				for (var i = 0; i < arrExcludeTagPrefix.length; i++) {
					if (nextElem.prop('id').indexOf(arrExcludeTagPrefix[i])==0) {
						ignoreFlag = true;
						break;
					};
				};
				if (!ignoreFlag) {
					displayIt? nextElem.show(400):nextElem.hide(400);

					
					if (displayIt && !!nextElem.find('span.headerbtn')) {
						nextElem.find('span.headerbtn').each(function(index, subIcon) {
							$(subIcon).removeClass('glyphicon-plus');
							$(subIcon).addClass('glyphicon-minus');
						});
					};

					if (displayIt && !!nextElem.hasClass('collapsed')) {
						nextElem.removeClass('collapsed');
					};
				};
				nextElem = nextElem.next();
			}
		});
	});    
	if (!(typeof autoCollapse === "undefined")) headerCollapse(1);
}
function headerCollapse(level){
	$(arrCollapsableTag[level]).find('span.headerbtn').click();
}