import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {get} from '../utility/toolbox' 
function Suggested(props) {
	const [suggestedManga, setSuggestedManga] = useState([]);
	useEffect(() => {
		if (props.categories) {
			similarMangas(props.categories, props.manga_id).then(result => {
	      setSuggestedManga(result.data.mangas)
	    })
		}
	}, [props.manga_id, props.categories])

	let mangaList = []

	if (suggestedManga.length > 0) {
      mangaList = suggestedManga.slice(0, 4).map(manga => (
      	<Link to={`/mangas/${manga.id}`} style={{display: 'block'}}>      		
	        <div className="product__sidebar__view__item set-bg"
	          style={{backgroundImage: `url(${manga.thumbnail})`}}>
	          <div className="ep">18 / ?</div>
	          <div className="view"><i className="fa fa-eye"></i> {manga.views}</div>
	          <h5><a href="#">{manga.title}</a></h5>
	        </div>
      	</Link>
      ))
  }

	return(
			<div className="anime__details__sidebar">
        <div className="section-title">
          <h5>you might like...</h5>
        </div>
        {mangaList}
      </div>
		)
}

const similarMangas = async(categories, manga_id) => {
	try {
		const response = await get('v2/mangas/suggested', {categories: categories, manga_id: manga_id})
    return response.data;
	} catch (error) {
		console.error("Error fetching mangas:", error);
    throw error;
	}
}


export default Suggested

