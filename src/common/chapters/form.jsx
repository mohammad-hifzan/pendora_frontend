import { useState, useEffect } from "react";

export default function ChapterFormPartial({ initialValues = {}, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: "",
    chapter_images: [],
  });

  useEffect(() => {
    setFormData({
      name: initialValues?.name || "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    let fileList = []
    if (files?.length > 0) {
    	fileList = Array.from(files);
    }
    if (name === "chapter_images") {
    	setFormData((prev) => ({
	      ...prev,
	      chapter_images: fileList, // ✅ store multiple File objects
	    }));
    } else {
    	setFormData({
	      ...formData,
	      [name]: value
	    });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fdata = buildFormData(formData);
    onSubmit(fdata);
  };

    const buildFormData = (data) => {
      debugger
      const formData = new FormData();
			formData.append("chapter[name]", data.name);
			if (data.chapter_images.length > 0) {				
				data.chapter_images.forEach((file, index) => {
				  formData.append("chapter[chapter_images][]", file);  // ✅ Notice the []
				});
			}
      return formData;
    };

  return (
    <form onSubmit={handleSubmit} className="chapter-form">
      <div className="row">

        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group label-floating">
            <label className="control-label">Name</label>
            <input className="form-control" placeholder="" type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
        </div>

        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group label-floating">
            <label className="control-label">Chapter Images</label>
            <input className="form-control" placeholder="" type="file" name="chapter_images" multiple={true} accept="image/*" onChange={handleChange} />
          </div>
        </div>
    

        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
          <button className="btn btn-primary btn-lg full-width" type="submit">Save all Changes</button>
        </div>
    
      </div>      
    </form>
  );
}
