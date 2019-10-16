(($) => {

	let arrTags, arrIgnoreTags;

	let collapse = function (headerElem) {

		let show = headerElem.hasClass('headerCollapsed') ? true : false;
		if (show) {
			// collapsed
			headerElem.removeClass('headerCollapsed');
			headerElem.find('i.headerbtn').removeClass('fa-plus-square-o').addClass('fa-minus-square-o')
		} else {
			headerElem.addClass('headerCollapsed');
			headerElem.find('i.headerbtn').removeClass('fa-minus-square-o').addClass('fa-plus-square-o')
		}

		/* Entry */
		headerCollapse(headerElem, headerElem.next(), show);
	}

	let headerCollapse = function (headerElem, currentElem, show) {
		/* get index of current elements */
		let headerIndex = this.arrTags.indexOf(headerElem.prop("tagName").toLowerCase());
		let nextElemIndex = this.arrTags.indexOf(currentElem.prop("tagName").toLowerCase());
		if (nextElemIndex === -1 || nextElemIndex > headerIndex) {
			if (show) {
				currentElem.show(400);

				/* reset status */
				currentElem.removeClass('headerCollapsed')
				currentElem.find('i.headerbtn').removeClass('fa-plus-square-o').addClass('fa-minus-square-o')
			} else {
				currentElem.hide(400);
			}
			headerCollapse(headerElem, currentElem.next(), show)
		}
	}

	let headerCollapseRobot = (contentSelector, arrTags, arrIgnoreTags) => {
		this.arrTags = arrTags;
		this.arrIgnoreTags = arrIgnoreTags;
		$(contentSelector).find(arrTags.join(',')).map((i, e) => {
			if ($(e).is(arrIgnoreTags.join(','))) {
				return;
			} else {
				$(e).css({
					cursor: 'pointer',
				})
				$(e).prepend('<i class="fa fa-minus-square-o p-1 headerbtn" aria-hidden="true"></i>');
			}
			$(e).on('click', () => {
				collapse($(e));
			})
		})
	}

	jQuery.extend({ headerCollapseRobot })
})(jQuery)