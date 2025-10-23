import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {get, post, getUser} from '../common/utility/toolbox' 
function FilterModal() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [excludedOptions, setExcludedOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [excluded, setExcluded] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setOptions(categoryOptions);

      // Handle "selected" from URL params
      const selectedLabels = new Set(
        searchParams.get("selected")?.split(",").filter(Boolean) || []
      );
      setSelected(
        categories
          .filter((category) => selectedLabels.has(category.name))
          .map((category) => ({ value: category.id, label: category.name }))
      );

      // Handle "excluded" from URL params
      const excludedLabels = searchParams.get("excluded")?.split(",") || [];
      setExcluded(
        categories
          .filter((category) => excludedLabels.includes(category.name))
          .map((category) => ({ value: category.id, label: category.name }))
      );

      // Filter available categories
      const selectedIds = new Set(selected.map((item) => item.value));
      setAvailableCategories(
        categories.filter((category) => !selectedIds.has(category.id))
      );
    }
  }, [categories, searchParams]);

  useEffect(() => {
    setExcludedOptions(
      availableCategories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    );
  }, [availableCategories]);

  const handleSelectChange = (selected) => {
    setSelected(selected);

    const selectedIds = new Set(selected.map((item) => item.value));
    setAvailableCategories(categories.filter((category) => !selectedIds.has(category.id)));

    setSearchParams((prevParams) => {
      if (selected === null || selected.length === 0) {
        prevParams.delete("selected");
      } else {
        prevParams.set("selected", selected.map((item) => item.label));
      }
      return prevParams;
    });
  };

  const handleExcludedChange = (excluded) => {
    setExcluded(excluded);

    setSearchParams((prevParams) => {
      if (excluded === null || excluded.length === 0) {
        prevParams.delete("excluded");
      } else {
        prevParams.set("excluded", excluded.map((item) => item.label));
      }
      return prevParams;
    });
  };

  const animatedComponents = makeAnimated();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    // Modal JSX
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="exampleModalLabel">Filter</h3>
          </div>
          <div className="modal-body">
            <div style={{marginBottom: 10}}><h5>Select Genres</h5></div>
            {
              isLoading ? (
                <p>Loading...</p> 
              ) : (
                <Select
                  value={selected} // Controlled component
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="select genres"
                  isMulti
                  options={options}
                  onChange={handleSelectChange}
                  className="basic-multi-select"
                  id="select_genres"
                />
              )
            }
   
            <div style={{ marginBottom: 20, marginTop: 20 }}></div>

            <div style={{marginBottom: 10}}><h5>Exclude Genres</h5></div>
            {
              isLoading ? (
                <p>Loading...</p> 
              ) : (
                <Select
                  value={excluded} // Controlled component
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={excludedOptions}
                  onChange={handleExcludedChange}
                  className="basic-multi-select"
                  id="excluded_genres"
                />
              )
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}


const getCategories = async() => {
  const result = await get('v2/categories')
  return result.data
}

export default FilterModal