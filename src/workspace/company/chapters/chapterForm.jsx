function ChapterForm(props) {

	return (
					<div className="row">
				
						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating">
								<label className="control-label">Name</label>
								<input className="form-control" placeholder="" type="text" name="name" value={props.formParams.name} onChange={props.handleChange} />
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating">
								<label className="control-label">Chapter Images</label>
								<input className="form-control" placeholder="" type="file" name="chapter_images" multiple={true} accept="image/*" onChange={props.handleChange} />
							</div>
						</div>
				

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<button className="btn btn-primary btn-lg full-width" type="submit">Save all Changes</button>
						</div>
				
					</div>
		)
}

export default ChapterForm