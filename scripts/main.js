var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
	'use strict';

	var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
	detailImage.src = imageUrl;

	var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
 	detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
	'use strict';
	return thumbnail.getAttribute('data-image-url');
}

function setDetailsFromThumb(thumbnail) {
 'use strict';
 setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

