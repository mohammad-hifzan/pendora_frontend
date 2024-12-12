import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import {post} from './utility/toolbox';
import $ from 'jquery';
function SearchModel() {
	const [data, setData] = useState([])
	const navigate = useNavigate();
	const handleChange = () => {
		if ($('#search-input').val().length > 0) {
			fetchData({query: $('#search-input').val()})
		} else {
			setData([])
		}
	}

	const handleClick = (id) => {
		$('.search-model').fadeOut(400, function () {
      $('#search-input').val('');
    });
		navigate(`mangas/${id}`)
		setData([]);
	}
	const fetchData = async(data) => {
		try {
			const response = await post('v2/mangas/search', data)
			if (response.statusText === 'OK' && response.status == 200) {
				setData(response.data);
			}
		} catch (error) {
			console.error('Submission error:', error);
	    return 'error'
		}
	}
	let mangasList = []
	if (data.length > 0) {
		mangasList = data.map(manga => (
      <p style={{color: '#e3c7c7', cursor: 'pointer'}} key={manga.id} onClick={() => handleClick(manga.id)}>{manga.title}</p>
    ))
	}
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
    	<div className="h-100 d-flex align-items-center justify-content-center" style={{overflow: 'auto !important'}}>
        <div className="search-close-switch"><i className="icon_close"></i></div>
        <form className="search-model-form" style={{border: '2px solid #fff', borderRadius: '30px', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)'}}>
            <input type="text" style={{marginBottom: 20}} id="search-input" onChange={handleChange} placeholder="Search here....." />
            <div style={{overflow: 'auto', maxHeight: '520px'}}>
            	{mangasList}
            </div>
        </form>
    	</div>
		</div>
		)
}

export default SearchModel