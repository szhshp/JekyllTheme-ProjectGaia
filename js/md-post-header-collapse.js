/*
md-post-header-collapse.js
V0.2 20170113

Demo link: 
	http://szhshp.org/tech/2016/08/23/jekyllmdpostcollapse.html


Example: 
	 $.headerCollapseRobot(
	 	arr_Id_CollapseEnds =  new Array("end"),                       
	 	arr_Collapsible_Tag = new Array("H1","H2","H3"),                       
	 	arr_ExcludeElemPrefix_InCollapsible  = new Array("comment-"),      
	 	arr_ExcludeElemPrefix_InCollapsing = new Array("sidebar-toc-Ik4D-")
	 )
*/


/**
 * [headerCollapseRobot description]
 * @param  {[type]} arr_Id_CollapseEnds                					 [when click the final collapse icon, elements after that header will be collapsed until mentioned in this array]
 * @param  {[type]} arr_Collapsible_Tag                					 [set the level of collapsible tags, uppercase]
 * @param  {[type]} arr_ExcludeElemPrefix_InCollapsible			 [The header elements which you do not want to enable ]
 * @param  {[type]} arr_ExcludeElemPrefix_InCollapsing 			 [The elements which will not be collapsed when click the icons]
 */

!function(a){
	a.extend({
		headerCollapseRobot: function(arr_Id_CollapseEnds, arr_Collapsible_Tag, arr_ExcludeElemPrefix_InCollapsible, arr_ExcludeElemPrefix_InCollapsing){
			function headerCollapsible () {
				$(':not(blockquote)>h1, :not(blockquote)>h2, :not(blockquote)>h3').each(function(index, curHeader) {
					if(index!=0)  {
						ignoreFlag = false;
						for (var i = 0; i < arr_ExcludeElemPrefix_InCollapsible .length; i++) {
							if ($(curHeader).prop('id').indexOf(arr_ExcludeElemPrefix_InCollapsible [i])==0) {
								ignoreFlag = true;
								break;
							};
						};
						if (!ignoreFlag)
							$(curHeader).prepend('<i class="fa fa-minus-square-o headerbtn" aria-hidden="true"></i>');
					}
					/**
					* [curHeader: current header]
					* [this: current span icon]
					*/
					$(curHeader).find('i.headerbtn').click(function(event) {
						var tagNameLevel = arr_Collapsible_Tag.indexOf($(curHeader).prop("tagName")); 
						if ($(curHeader).hasClass('collapsed')) {
							/*if this header already collapsed*/
							var displayIt = true;
							$(curHeader).removeClass('collapsed');
							$(this).removeClass('fa-plus-square-o');
							$(this).addClass('fa-minus-square-o');
						}else{
							var displayIt = false;
							$(curHeader).addClass('collapsed');
							$(this).removeClass('fa-minus-square-o');
							$(this).addClass('fa-plus-square-o');
						}

						var nextElem = $(curHeader).next();
						var ignoreFlag;
						while( 
							arr_Id_CollapseEnds.indexOf(nextElem.prop('id')) ==-1 
							&& (arr_Collapsible_Tag.indexOf(nextElem.prop("tagName")) == -1 || arr_Collapsible_Tag.indexOf(nextElem.prop("tagName")) > tagNameLevel)
							){
							ignoreFlag = false;
						for (var i = 0; i < arr_ExcludeElemPrefix_InCollapsing.length; i++) {
							if (nextElem.length && nextElem.prop('id').indexOf(arr_ExcludeElemPrefix_InCollapsing[i])==0) {
								ignoreFlag = true;
								break;
							};
						};
						if (!ignoreFlag) {
							displayIt? nextElem.show(400):nextElem.hide(400);


							if (displayIt && !!nextElem.find('i.headerbtn')) {
								nextElem.find('i.headerbtn').each(function(index, subIcon) {
									$(subIcon).removeClass('fa-plus-square-o');
									$(subIcon).addClass('fa-minus-square-o');
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
				$(arr_Collapsible_Tag[level]).find('i.headerbtn').click();
			}
			headerCollapsible();
		}
	})
}(jQuery);