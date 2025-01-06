import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
function TypeSelect() {
	const [filter, setFilter] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    setFilter(type || "updated"); // Default to "updated" if no type is in the URL
  }, [location]);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;

    // Create a new URLSearchParams object to modify the query parameters
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("type", newFilter); // Update or set the `type` parameter

    // Navigate to the updated URL with preserved parameters
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };


	return(
			<div className="product__page__filter">
        <p>View by:</p>
        <select
        	id="mangaFilter"
        	value={filter}
	        onChange={handleFilterChange}
        >
          <option value="popular">Popular</option>
          <option value="new">Recent</option>
          <option value="updated">Top Views</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
      </div>
		)
}

export default TypeSelect