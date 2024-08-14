import React, { useEffect } from 'react';
import $ from 'jquery';
function SearchModel() {
		useEffect(() => {
			$('.search-switch').on('click', function () {
	        $('.search-model').fadeIn(400);
	    });

	    $('.search-close-switch').on('click', function () {
	      $('.search-model').fadeOut(400, function () {
	        $('#search-input').val('');
	      });
	    });
		}, [])

	return (
		<div className="search-model">
    	<div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch"><i className="icon_close"></i></div>
        <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
        </form>
    	</div>
		</div>
		)
}

export default SearchModel